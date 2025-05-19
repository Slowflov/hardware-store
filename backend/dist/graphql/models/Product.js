"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true, index: true },
    oldPrice: { type: Number, index: true },
    newPrice: { type: Number, index: true },
    availability: { type: String },
    code: { type: String, index: true },
    discountThreshold: { type: Number },
    inventoryCount: { type: Number },
    customPrice: { type: Number },
    type: { type: String },
    attributes: [
        {
            name: String,
            value: String,
        },
    ],
    descriptionBlocks: [
        {
            title: String,
            content: String,
            horizontal: { type: Boolean, default: false },
        },
    ],
    details: [
        {
            name: String,
            value: String,
        },
    ],
});
const Product = mongoose_1.default.models.Product || mongoose_1.default.model('Product', productSchema);
exports.default = Product;
