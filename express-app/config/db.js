import mongoose from "mongoose";

export const connectDB = async () => {
    const MONGODB_URL = 'mongodb+srv://emanabukhater2001:123456Eman@cluster0.7a96qau.mongodb.net/express';
    await mongoose.connect(MONGODB_URL).then(() => {
        console.log('Connected to MongoDB');
    }
    ).catch(err => {
        console.error('MongoDB connection error:', err);
    }
    );
}
