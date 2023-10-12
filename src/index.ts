import { SERVER_PORT } from './config';
import { Server } from 'socket.io';
import app from './app';
import { createServer } from 'http';
import { ReservedOrUserEventNames } from 'socket.io/dist/typed-events';
import { SocketReservedEventsMap } from 'socket.io/dist/socket';

interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
  }
  
  interface ClientToServerEvents {
    hello: () => void;
  }
  
  interface InterServerEvents {
    ping: () => void;
  }
  
  interface SocketData {
    name: string;
    age: number;
  }

const httpServer = createServer(app);
const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
     SocketData>(httpServer) //, {
    //     cors: {
    //         origin: "*"
    //       }
    // });

io.on('connection', (socket) => {
    console.log(` [*] ${socket.id} user connected...`);
   
    socket.on('admin' as any, (data: any): void => {
        io.to('client').emit('client' as any, data);
      });
    
      socket.join('client');
    
    socket.on('disconnect', () => {
        console.log(' [ ] A user disconnected');
      });
});


httpServer.listen(SERVER_PORT, () => {
    console.log(` [*] Server running at port ${SERVER_PORT}...`);
});

