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
const productMutationResolvers = {
    Mutation: {
        addProduct: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const { name, img, category } = args;
                if (!name || !img || !category) {
                    throw new Error('All fields are required: name, img, category');
                }
                // Применение значения по умолчанию для horizontal, если оно не передано
                if (args.descriptionBlocks) {
                    args.descriptionBlocks = args.descriptionBlocks.map(block => {
                        var _a;
                        return (Object.assign(Object.assign({}, block), { horizontal: (_a = block.horizontal) !== null && _a !== void 0 ? _a : false }));
                    });
                }
                const newProduct = new Product_1.default(args);
                yield newProduct.save();
                return {
                    id: newProduct._id.toString(),
                    name: newProduct.name,
                    img: newProduct.img,
                    category: newProduct.category,
                    oldPrice: newProduct.oldPrice,
                    newPrice: newProduct.newPrice,
                    availability: newProduct.availability,
                    code: newProduct.code,
                    discountThreshold: newProduct.discountThreshold,
                    inventoryCount: newProduct.inventoryCount,
                    customPrice: newProduct.customPrice,
                    type: newProduct.type,
                    attributes: newProduct.attributes,
                    descriptionBlocks: newProduct.descriptionBlocks,
                    details: newProduct.details, // Возвращаем details
                };
            }
            catch (error) {
                console.error(error);
                throw new Error("Error adding product");
            }
        }),
    },
};
exports.default = productMutationResolvers;
