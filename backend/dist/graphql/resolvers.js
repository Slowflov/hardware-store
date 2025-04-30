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
                // Извлекаем priceRange и typeFilter из filters
                const { priceRange, typeFilter } = filters || {};
                // Применяем фильтры
                const query = (0, applyFilters_1.applyFilters)(category, priceRange, typeFilter);
                console.log("Query:", query);
                const sortOptions = (0, SortProducts_1.getSortOptions)(sortBy);
                const totalProducts = yield Product_1.default.countDocuments(query);
                const totalPages = Math.ceil(totalProducts / pageSize);
                const products = yield Product_1.default.find(query)
                    .sort(sortOptions)
                    .skip((page - 1) * pageSize)
                    .limit(pageSize);
                return {
                    products: products.map(product => ({
                        id: product._id.toString(),
                        name: product.name,
                        img: product.img,
                        category: product.category,
                        oldPrice: product.oldPrice,
                        newPrice: product.newPrice,
                        availability: product.availability,
                        code: product.code,
                        quantity: product.quantity,
                        customPrice: product.customPrice,
                        type: product.type,
                    })),
                    totalPages,
                };
            }
            catch (error) {
                console.error(error);
                throw new Error("Error fetching products");
            }
        }),
    },
};
exports.default = productQueryResolvers;
