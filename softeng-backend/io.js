const http = require("http").createServer();
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("A user has connected");

  socket.on("disconnect", () => {
    console.log("A user has disconnected");
  });

  socket.on("message", (msg) => {
    console.log(`Received message: ${msg}`);
    io.emit("message", msg);
  });
});
