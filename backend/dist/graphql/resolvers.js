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
const Product_1 = __importDefault(require("../graphql/models/Product"));
const SortProducts_1 = require("../filters/SortProducts");
const applyFilters_1 = require("../filters/applyFilters");
const productQueryResolvers = {
    Query: {
        getProducts: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { category, sortBy, page = 1, pageSize = 9, filters }) {
            try {
                const { priceRange, typeFilter } = filters || {};
                const query = (0, applyFilters_1.applyFilters)(category, priceRange, typeFilter);
                const sortOptions = (0, SortProducts_1.getSortOptions)(sortBy);
                const totalProducts = yield Product_1.default.countDocuments(query);
                const totalPages = Math.ceil(totalProducts / pageSize);
                // Ensure page is within valid range
                const validPage = Math.max(1, Math.min(page, totalPages));
                const products = yield Product_1.default.find(query)
                    .sort(sortOptions)
                    .skip((validPage - 1) * pageSize)
                    .limit(pageSize);
                return {
                    products: products.map(product => {
                        var _a;
                        return ({
                            id: product._id.toString(),
                            name: product.name,
                            img: product.img,
                            category: product.category,
                            oldPrice: product.oldPrice,
                            newPrice: product.newPrice,
                            availability: product.availability,
                            code: product.code,
                            quantity: product.quantity,
                            inventoryCount: product.inventoryCount,
                            customPrice: product.customPrice,
                            type: product.type,
                            attributes: product.attributes,
                            // Добавляем поддержку опционального поля horizontal в descriptionBlocks
                            descriptionBlocks: (_a = product.descriptionBlocks) === null || _a === void 0 ? void 0 : _a.map(block => {
                                var _a;
                                return ({
                                    title: block.title,
                                    content: block.content,
                                    horizontal: (_a = block.horizontal) !== null && _a !== void 0 ? _a : false, // Если horizontal нет, то устанавливаем false
                                });
                            }),
                            details: product.details,
                        });
                    }),
                    totalPages,
                };
            }
            catch (error) {
                console.error('Error fetching products:', error);
                throw new Error("Error fetching products");
            }
        }),
        getProductById: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            var _b;
            try {
                const product = yield Product_1.default.findById(id);
                if (!product) {
                    throw new Error('Товар не найден');
                }
                return {
                    id: product._id.toString(),
                    name: product.name,
                    img: product.img,
                    oldPrice: product.oldPrice,
                    newPrice: product.newPrice,
                    availability: product.availability,
                    code: product.code,
                    quantity: product.quantity,
                    inventoryCount: product.inventoryCount,
                    customPrice: product.customPrice,
                    type: product.type,
                    category: product.category,
                    attributes: product.attributes,
                    // Добавляем поддержку опционального поля horizontal в descriptionBlocks
                    descriptionBlocks: (_b = product.descriptionBlocks) === null || _b === void 0 ? void 0 : _b.map(block => {
                        var _a;
                        return ({
                            title: block.title,
                            content: block.content,
                            horizontal: (_a = block.horizontal) !== null && _a !== void 0 ? _a : false, // Если horizontal нет, то устанавливаем false
                        });
                    }),
                    details: product.details,
                };
            }
            catch (error) {
                console.error('Ошибка при получении товара:', error.message);
                throw new Error('Ошибка получения товара');
            }
        }),
    },
};
exports.default = productQueryResolvers;
