const app = require("./app");
const http = require("http");
const { Server } = require("socket.io");
const config = require("./utils/config");
const logger = require("./utils/logger");
const { v4: uuidv4 } = require("uuid");
const runCode = require("./python_interpreter");

const PORT = config.PORT || 3003;
const server = http.createServer(app);
let room_id = uuidv4();

const io = new Server(server, {
  path: "/socket",
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  console.log(io.of("/").sockets.keys());
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("queue", (find) => {
    if (find) {
      socket.join("queue-room");
    } else {
      socket.leave("queue-room");
    }
  });

  // socket.on("surrender", ({ room_id, userId }) => {
  //   console.log("hi, surrender", userId);
  // });

  socket.on("surrender", async ({ room_id, userId }) => {
    const sockets = await io.in(room_id).fetchSockets();
    const socket_ids = sockets.map((s) => s.id);
    const loserIndex = socket_ids.indexOf(userId);
    const winnerIndex = 1 - loserIndex;
    const winner = io.sockets.sockets.get(socket_ids[winnerIndex]);
    const loser = io.sockets.sockets.get(socket_ids[loserIndex]);

    winner.emit("match_result", { msg: "You won!", surrendered: false });
    loser.emit("match_result", { msg: "You lost", surrendered: true });
    winner.leave(room_id);
    loser.leave(room_id);
  });

  socket.on(
    "match_submit",
    async ({ room_id, code, socketId, questionDetails }) => {
      const total = questionDetails.testCases.length;
      let correct = 0;
      const runCodePromises = questionDetails.testCases.map(
        async (testCase) => {
          const toRun = code + "\n" + testCase.exe;
          const res = await runCode(toRun);
          console.log({ res, answer: testCase.answer });
          if (res === testCase.answer) {
            correct += 1;
          }
        }
      );
      // Wait for all the promises to resolve using `Promise.all()`
      await Promise.all(runCodePromises);

      console.log(correct);

      // Move the `io.to(room_id).emit()` call outside the `forEach()` loop
      if (total === correct) {
        io.to(room_id).emit("player_code_submit", { correct: true, socketId });
      } else {
        io.to(room_id).emit("player_code_submit", { correct: false, socketId });
      }
    }
  );

  socket.on("player_lose", ({ room_id, socketId }) => {
    io.to(room_id).emit("match_end", { loser: socketId });
  });
});

io.of("/").adapter.on("join-room", async (room, id) => {
  console.log(`socket ${id} has joined room ${room}`);
  if (room === "queue-room") {
    const sockets = await io.in("queue-room").fetchSockets();
    const socket_ids = sockets.map((s) => s.id);

    if (sockets.length == 2) {
      // should only work in "queue-room"
      const s1 = io.sockets.sockets.get(socket_ids[0]);
      const s2 = io.sockets.sockets.get(socket_ids[1]);
      s1.emit("join-match", { room_id, id: socket_ids[0] });
      s2.emit("join-match", { room_id, id: socket_ids[1] });

      s1.leave("queue-room");
      s2.leave("queue-room");
      s1.join(room_id);
      s2.join(room_id);
      // possible that we need time delay to send the room id
      setTimeout(() => {
        room_id = uuidv4();
      }, 1000);
    }
    console.log(
      `Number of players in queue: ${
        (await io.in("queue-room").fetchSockets()).length
      }`
    );
  }
});

io.of("/").adapter.on("leave-room", (room, id) => {
  console.log(`socket ${id} has left room ${room}`);
});

server.listen(PORT, () => {
  logger.info(`Server running on localhost:${PORT}`);
});
