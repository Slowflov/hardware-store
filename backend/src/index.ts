import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import mongoose from 'mongoose';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const PORT = process.env.PORT || 5000;

// Подключение к базе данных MongoDB
const connectDB = async () => {
  try {
    // Просто подключаемся без лишних параметров
    await mongoose.connect('mongodb://localhost:27017/hardware-store');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Завершаем процесс, если не удалось подключиться
  }
};

async function startServer() {
  const app = express();
  app.use(cors());

  // Подключаемся к базе данных
  await connectDB();

  // Создание экземпляра ApolloServer
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Стартуем сервер
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  // Запуск Express сервера
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch((error) => {
  console.error('❌ Server failed to start:', error);
});


