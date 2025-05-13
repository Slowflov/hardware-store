import mongoose, { Document, Model } from 'mongoose';

export interface Attribute {
  name: string;
  value: string;
}

export interface DescriptionBlock {
  title: string;
  content: string;
  horizontal?: boolean;  // Добавлено поле horizontal, оно опциональное
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
  discountThreshold?: number;
  inventoryCount?: number;
  customPrice?: number;
  type?: string;
  attributes?: Attribute[];
  descriptionBlocks?: DescriptionBlock[];
  details?: Detail[];
}

const productSchema = new mongoose.Schema<ProductType>({
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
      horizontal: { type: Boolean, default: false },  // Добавлено поле horizontal, с дефолтным значением false
    },
  ],
  details: [
    {
      name: String,
      value: String,
    },
  ],
});

const Product: Model<ProductType> =
  mongoose.models.Product || mongoose.model<ProductType>('Product', productSchema);

export default Product;
