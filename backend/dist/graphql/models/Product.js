"use strict";
// models/Product.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Схема продукта
const productSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true, index: true }, // Добавить индекс
    oldPrice: { type: Number, index: true }, // Для быстрого поиска по цене
    newPrice: { type: Number, index: true }, // Для быстрого поиска по цене
    availability: { type: String, index: true }, // Можно индексировать для быстрого поиска
    code: { type: String, index: true }, // Поиск по коду
    quantity: { type: Number },
    customPrice: { type: Number },
    type: { type: String, index: true }, // Индексирование для быстрого поиска
});
// Типобезопасная модель с проверкой на перезагрузку
const Product = mongoose_1.default.models.Product ||
    mongoose_1.default.model('Product', productSchema);
exports.default = Product;
