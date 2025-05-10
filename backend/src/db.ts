import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Загружаем переменные окружения из .env файла

const MONGO_URI = process.env.MONGO_URI || ''; // Читаем строку подключения из .env файла

if (!MONGO_URI) {
  console.error('MONGO_URI не задан в .env файле!');
  process.exit(1);  // Прерываем выполнение, если строка подключения не найдена
}

const connectDB = async () => {
  try {
    // Просто передаем строку подключения без дополнительных параметров
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
    process.exit(1);  // Прерываем выполнение при ошибке подключения
  }
};

export default connectDB;
