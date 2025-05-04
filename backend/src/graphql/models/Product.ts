import mongoose, { Document, Model } from 'mongoose';

export interface Attribute {
  name: string;
  value: string;
}

export interface DescriptionBlock {
  title: string;
  content: string;
}

export interface Detail {
  name: string;
  value: string;
}

export interface ProductType extends Document {
  name: string;
  img: string;
  category: string;
  oldPrice?: number;
  newPrice?: number;
  availability?: string;
  code?: string;
  quantity?: number;
  inventoryCount?: number;
  customPrice?: number;
  type?: string;
  attributes?: Attribute[];
  descriptionBlocks?: DescriptionBlock[];
  details?: Detail[]; // Добавлено поле details
}

const productSchema = new mongoose.Schema<ProductType>({
  name: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true, index: true },
  oldPrice: { type: Number, index: true },
  newPrice: { type: Number, index: true },
  availability: { type: String },
  code: { type: String, index: true },
  quantity: { type: Number },
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
    },
  ],
  details: [
    {
      name: String,
      value: String,
    },
  ], // Добавлена схема для details
});

const Product: Model<ProductType> =
  mongoose.models.Product || mongoose.model<ProductType>('Product', productSchema);

export default Product;
