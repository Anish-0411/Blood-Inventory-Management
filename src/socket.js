import { io } from 'socket.io-client';


const API = process.env.REACT_APP_API_URL;

const socket = io(API, {
  transports: ["websocket"],
});

// const socket = io('http://${process.env.REACT_APP_API_URL}'); 

export default socket;