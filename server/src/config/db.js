import mongoose from "mongoose";

mongoose.connection.on('error', (err)=> {
    console.error(`MongoDB connection error: ${err}`);
})

mongoose.connection.on('disconnected', ()=>{
    console.warn('MongoDB disconnected.');
})

export const connectDB = async () => {
   const uri = process.env.MONGODB_URI;
   if(!uri) {
        console.error('MongoDB URI is not provided')
        process.exit(1)
   }
   try {
    console.info('Connecting to MongoDB...')
    const conn = await mongoose.connect(uri)
    console.info(`MongoDB connected: ${conn.connection.host} db: ${conn.connection.name}`)
    return conn
   } catch (error) {
     console.error(`MongoDB initial connection failed, restarting the application, error=${error}`)
    process.exit(1)
   }
}
