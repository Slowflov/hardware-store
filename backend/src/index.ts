import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './db';  // Импортируем подключение к базе данных
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const PORT = process.env.PORT || 5000;

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

  // Стартуем 
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  // Запуск Expres
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch((error) => {
  console.error('❌ Server failed to start:', error);
});
