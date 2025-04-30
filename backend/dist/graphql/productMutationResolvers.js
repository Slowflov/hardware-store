"use strict";
// resolvers/productMutationResolvers.ts
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
// Импорт модели Product из файла моделей GraphQL
const Product_1 = __importDefault(require("../graphql/models/Product"));
// Определение резолверов для мутаций
const productMutationResolvers = {
    Mutation: {
        // Мутация для добавления нового продукта
        addProduct: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                // Деструктуризация аргументов
                const { name, img, category } = args;
                // Проверка обязательных полей
                if (!name || !img || !category) {
                    throw new Error('All fields are required: name, img, category');
                }
                // Создание нового экземпляра продукта с использованием переданных аргументов
                const newProduct = new Product_1.default(args);
                // Сохранение нового продукта в базе данных
                yield newProduct.save();
                // Возврат данных о новом продукте
                return {
                    id: newProduct._id.toString(), // Преобразование ObjectId в строку
                    name: newProduct.name,
                    img: newProduct.img,
                    category: newProduct.category,
                    oldPrice: newProduct.oldPrice,
                    newPrice: newProduct.newPrice,
                    availability: newProduct.availability,
                    code: newProduct.code,
                    quantity: newProduct.quantity,
                    customPrice: newProduct.customPrice,
                    type: newProduct.type,
                };
            }
            catch (error) {
                // Логирование ошибки и выброс исключения
                console.error(error);
                throw new Error("Error adding product");
            }
        }),
    },
};
// Экспорт резолверов мутаций
exports.default = productMutationResolvers;
