import { io } from "socket.io-client";

const socket = io(`${import.meta.env.VITE_URL_PREFIX}:3003`, {
  path: "/socket",
  autoConnect: false,
});

export { socket };
