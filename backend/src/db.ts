import mongoose from "mongoose";
import dotenv from "dotenv";

// Загружаем переменные из .env
dotenv.config();

const connectDB = async () => {
  try {
    // Используем строку подключения из .env
    const dbURI = process.env.MONGO_URI;
    await mongoose.connect(dbURI);  // Убираем параметры useNewUrlParser и useUnifiedTopology
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;

