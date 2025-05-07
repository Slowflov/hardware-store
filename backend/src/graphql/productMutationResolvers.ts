import Product from '../graphql/models/Product';

interface AddProductArgs {
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
  attributes?: { name: string; value: string }[];
  descriptionBlocks?: { title: string; content: string; horizontal?: boolean }[]; // Добавлен horizontal
  details?: { name: string; value: string }[];
}

const productMutationResolvers = {
  Mutation: {
    addProduct: async (_: any, args: AddProductArgs) => {
      try {
        const { name, img, category } = args;

        if (!name || !img || !category) {
          throw new Error('All fields are required: name, img, category');
        }

        // Применение значения по умолчанию для horizontal, если оно не передано
        if (args.descriptionBlocks) {
          args.descriptionBlocks = args.descriptionBlocks.map(block => ({
            ...block,
            horizontal: block.horizontal ?? false, // Если horizontal нет, то устанавливаем false
          }));
        }

        const newProduct = new Product(args);
        await newProduct.save();

        return {
          id: newProduct._id.toString(),
          name: newProduct.name,
          img: newProduct.img,
          category: newProduct.category,
          oldPrice: newProduct.oldPrice,
          newPrice: newProduct.newPrice,
          availability: newProduct.availability,
          code: newProduct.code,
          quantity: newProduct.quantity,
          inventoryCount: newProduct.inventoryCount,
          customPrice: newProduct.customPrice,
          type: newProduct.type,
          attributes: newProduct.attributes,
          descriptionBlocks: newProduct.descriptionBlocks,
          details: newProduct.details, // Возвращаем details
        };
      } catch (error) {
        console.error(error);
        throw new Error("Error adding product");
      }
    },
  },
};

export default productMutationResolvers;
