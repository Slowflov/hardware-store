// models/Product.ts

import mongoose, { Document, Model } from 'mongoose';

// Интерфейс модели продукта
export interface ProductType extends Document {
  name: string;
  img: string;
  category: string;
  oldPrice?: number;
  newPrice?: number;
  availability?: string;
  code?: string;
  quantity?: number;
  customPrice?: number;
  type?: string;
}

// Схема продукта
const productSchema = new mongoose.Schema<ProductType>({
  name: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true, index: true },  // Добавить индекс
  oldPrice: { type: Number, index: true },  // Для быстрого поиска по цене
  newPrice: { type: Number, index: true },  // Для быстрого поиска по цене
  availability: { type: String, index: true },  // Можно индексировать для быстрого поиска
  code: { type: String, index: true },  // Поиск по коду
  quantity: { type: Number },
  customPrice: { type: Number },
  type: { type: String, index: true },  // Индексирование для быстрого поиска
});

// Типобезопасная модель с проверкой на перезагрузку
const Product: Model<ProductType> =
  mongoose.models.Product as Model<ProductType> ||
  mongoose.model<ProductType>('Product', productSchema);

export default Product;