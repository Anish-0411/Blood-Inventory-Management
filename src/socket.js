import { io } from 'socket.io-client';


// const API = process.env.REACT_APP_API_URL;

// const socket = io(API, {
//   transports: ["websocket"],
//   secure: true,
// });
const socket = io(process.env.REACT_APP_API_URL, {
  transports: ["websocket", "polling"],
  secure: true,
  withCredentials: true,
  reconnection: true,
});


socket.on('connect_error', (err) => {
  console.error("❌ WebSocket failed:", err.message);
});

export default socket;

