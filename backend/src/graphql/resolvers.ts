import Product from '../graphql/models/Product';
import { getSortOptions } from '../filters/SortProducts';
import { applyFilters } from '../filters/applyFilters';

interface GetProductsArgs {
  category?: string;
  sortBy?: string;
  page?: number;
  pageSize?: number;
  filters?: {
    priceRange?: [number, number];
    typeFilter?: string[];
  };
}

const productQueryResolvers = {
  Query: {
    getProducts: async (_: any, { category, sortBy, page = 1, pageSize = 9, filters }: GetProductsArgs) => {
      try {
        const { priceRange, typeFilter } = filters || {};
        const query = applyFilters(category, priceRange, typeFilter);
        const sortOptions = getSortOptions(sortBy);

        const totalProducts = await Product.countDocuments(query);
        const totalPages = Math.ceil(totalProducts / pageSize);

        // Ensure page is within valid range
        const validPage = Math.max(1, Math.min(page, totalPages));

        const products = await Product.find(query)
          .sort(sortOptions)
          .skip((validPage - 1) * pageSize)
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
            inventoryCount: product.inventoryCount,
            customPrice: product.customPrice,
            type: product.type,
            attributes: product.attributes,
            // Добавляем поддержку опционального поля horizontal в descriptionBlocks
            descriptionBlocks: product.descriptionBlocks?.map(block => ({
              title: block.title,
              content: block.content,
              horizontal: block.horizontal ?? false, // Если horizontal нет, то устанавливаем false
            })),
            details: product.details,
          })),
          totalPages,
        };
      } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error("Error fetching products");
      }
    },

    getProductById: async (_: any, { id }: { id: string }) => {
      try {
        const product = await Product.findById(id);

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
          descriptionBlocks: product.descriptionBlocks?.map(block => ({
            title: block.title,
            content: block.content,
            horizontal: block.horizontal ?? false, // Если horizontal нет, то устанавливаем false
          })),
          details: product.details,
        };
      } catch (error) {
        console.error('Ошибка при получении товара:', error.message);
        throw new Error('Ошибка получения товара');
      }
    },
  },
};

export default productQueryResolvers;
