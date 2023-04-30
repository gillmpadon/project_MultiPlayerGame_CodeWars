const app = require("./app");
const http = require("http");
const { Server } = require("socket.io");
const config = require("./utils/config");
const logger = require("./utils/logger");
const { v4: uuidv4 } = require("uuid");

const PORT = config.PORT || 3003;
const server = http.createServer(app);
let room_id = uuidv4();

const io = new Server(server, {
  path: "/socket",
  cors: {
    origin: "http://localhost:5173",
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
    console.log(room_id, userId);
    const sockets = await io.in(room_id).fetchSockets();
    const socket_ids = sockets.map((s) => s.id);
    const loserIndex = socket_ids.indexOf(userId);
    const winnerIndex = 1 - loserIndex;
    const winner = io.sockets.sockets.get(socket_ids[winnerIndex]);
    const loser = io.sockets.sockets.get(socket_ids[loserIndex]);

    console.log(winner, loser);

    winner.emit("match_result", { msg: "You won!", surrendered: false });
    loser.emit("match_result", { msg: "You lost", surrendered: true });
    winner.leave(room_id);
    loser.leave(room_id);
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
  if (room === "queue-room") {
    const s = io.sockets.sockets.get(id);
    s.emit("leave-queue", { room_id, id });
  }
});

server.listen(PORT, () => {
  logger.info(`Server running on localhost:${PORT}`);
});