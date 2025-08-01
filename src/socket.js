import { io } from 'socket.io-client';


// const API = process.env.REACT_APP_API_URL;

// const socket = io(API, {
//   transports: ["websocket"],
//   secure: true,
// });
const socket = io(process.env.REACT_APP_API_URL, {
  transports: ["websocket", "polling"], // ← enable fallback
  secure: true,
  reconnection: true,
});

export default socket;

