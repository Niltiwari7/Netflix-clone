import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config()
const app = express()

// Allowing cross-origin requests
app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json())

// Middleware to parse cookies
app.use(cookieParser())

// Parse URL-encoded bodies
app.use(express.urlencoded({extended: true}))

// Middleware to log each API request
app.use((req,res,next)=> {
    const startTime = Date.now()
    // Log request details
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`)

    // Log response details when response is finished
    res.on('finish', ()=>{
        const duration = Date.now() - startTime
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`)
    })
    next()
})

let dbConn
// Initialize database connection
connectDB().then((conn) => {
  dbConn = conn
})

// Route
app.use('/api/auth', authRoutes )

// Start the server
const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${server.address().port}`);
})

/**
 * Graceful shutdown
 */
let isShuttingDown = false;
const gracefulShutdown = async () => {
    if(isShuttingDown) return;
    isShuttingDown = true;
    console.log('Received kill signal, shutting down gracefully.');
    try {
      if(dbConn && dbConn.connection) {
        await dbConn.connection.close();
        console.log('MongoDB connection closed.');
      }
      await server.close()
      console.log('Clean up done, existing now.');
      process.exit(0);
    } catch (error) {
      console.error('Error during graceful shutdown', error);
      process.exit(1);
    }
}

process.on('SIGTERM', gracefulShutdown)
process.on('SIGINT', gracefulShutdown)   