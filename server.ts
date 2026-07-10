import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { User } from "./server/models/User";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB if URI is present, otherwise log a warning and proceed without DB
let dbConnected = false;
if (process.env.MONGODB_URI && (process.env.MONGODB_URI.startsWith('mongodb://') || process.env.MONGODB_URI.startsWith('mongodb+srv://'))) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(async () => {
      console.log("Connected to MongoDB successfully!");
      dbConnected = true;
      
      // Seed default users if none exist
      try {
        const count = await User.countDocuments();
        if (count === 0) {
          console.log('Seeding default users...');
          await User.create([
            { name: 'System Admin', email: 'admin@university.edu', password: 'password123', role: 'admin' },
            { name: 'Dr. Smith', email: 'faculty@university.edu', password: 'password123', role: 'faculty', department: 'Computer Science' },
            { name: 'John Doe', email: 'student@university.edu', password: 'password123', role: 'student', department: 'Computer Science' }
          ]);
          console.log('Default users seeded successfully.');
        }
      } catch (e) {
        console.error('Failed to seed users:', e);
      }
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      console.warn("Application will start without database connectivity.");
    });
} else {
  console.warn("Valid MONGODB_URI not found. Starting without database connectivity.");
}


// ==========================================
// API ROUTES
// ==========================================
import authRoutes from './server/routes/authRoutes';
import dashboardRoutes from './server/routes/dashboardRoutes';
import attendanceRoutes from './server/routes/attendanceRoutes';
import feeRoutes from './server/routes/feeRoutes';
import noticeRoutes from './server/routes/noticeRoutes';
import bookRoutes from './server/routes/bookRoutes';
import leaveRoutes from './server/routes/leaveRoutes';

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/fees', feeRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/leaves', leaveRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", dbConnected });
});

// Vite middleware for development
async function startServer() {
  const http = await import("http");
  const server = http.createServer(app);
  
  const { Server } = await import("socket.io");
  const io = new Server(server, {
    cors: {
      origin: "*",
    }
  });

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    
    socket.on("join_room", (room) => {
      socket.join(room);
      console.log(`User ${socket.id} joined room ${room}`);
    });

    socket.on("send_message", (data) => {
      io.to(data.room).emit("receive_message", data);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
