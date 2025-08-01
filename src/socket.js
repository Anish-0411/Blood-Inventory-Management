import { io } from 'socket.io-client';


const API = process.env.REACT_APP_API_URL;

const socket = io(API, {
  transports: ["websocket"],
  secure: true,
});


// const io = new Server(server, {
//   cors: {
//     origin: process.env.CORS_ORIGIN || '*',
//     methods: ['GET', 'POST'],
//     credentials: true,
//     transports: ["websocket"],
//   secure: true,
//   }
// });

export default socket;

