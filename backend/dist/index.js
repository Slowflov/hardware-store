"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const schema_1 = __importDefault(require("./graphql/schema"));
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const PORT = process.env.PORT || 5000;
// Подключение к базе данных MongoDB
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Просто подключаемся без лишних параметров
        yield mongoose_1.default.connect('mongodb://localhost:27017/hardware-store');
        console.log('MongoDB connected successfully');
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Завершаем процесс, если не удалось подключиться
    }
});
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use((0, cors_1.default)());
        // Подключаемся к базе данных
        yield connectDB();
        // Создание экземпляра ApolloServer
        const server = new apollo_server_express_1.ApolloServer({
            typeDefs: schema_1.default,
            resolvers: resolvers_1.default,
        });
        // Стартуем сервер
        yield server.start();
        server.applyMiddleware({ app, path: '/graphql' });
        // Запуск Express сервера
        app.listen(PORT, () => {
            console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
}
startServer().catch((error) => {
    console.error('❌ Server failed to start:', error);
});
