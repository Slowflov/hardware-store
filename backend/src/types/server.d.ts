// src/types/express.d.ts
import { User } from "../models/User"; // Замените путь на правильный путь до вашей модели

declare global {
  namespace Express {
    interface Request {
      user?: User; // Добавляем свойство user
    }
  }
}
