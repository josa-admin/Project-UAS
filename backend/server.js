import express from 'express';
import cors from 'cors';
// import dotenv from 'dotenv';
import { createServer } from 'http';
// import { Server } from 'socket.io';
import authRoutes from './routes/authRoutes.js';
import beasiswaRoutes from './routes/beasiswaRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';

const app = express();
const httpServer = createServer(app);
// const io = new Server(httpServer, {
//   cors: {
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,
//   },
// });

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/beasiswa', beasiswaRoutes);
app.use('/api/notifications', notificationRoutes);

// Socket.io connection
// io.on('connection', (socket) => {
//   console.log('User connected:', socket.id);

//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//   });
// });

// Export io untuk digunakan di controller
// export { io };
// Route handler: runs for a GET request to exactly /test
app.get('/test', (req, res) => {
  res.send('Hello from /test route handler');
});
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
