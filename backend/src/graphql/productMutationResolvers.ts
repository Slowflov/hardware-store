// resolvers/productMutationResolvers.ts

// Импорт модели Product из файла моделей GraphQL
import Product from '../graphql/models/Product';

// Определение интерфейса для аргументов мутации addProduct
interface AddProductArgs {
  name: string; // Название продукта
  img: string; // URL изображения продукта
  category: string; // Категория продукта
  oldPrice?: number; // Старая цена продукта (необязательное поле)
  newPrice?: number; // Новая цена продукта (необязательное поле)
  availability?: string; // Доступность продукта (необязательное поле)
  code?: string; // Код продукта (необязательное поле)
  quantity?: number; // Количество продукта (необязательное поле)
  customPrice?: number; // Пользовательская цена продукта (необязательное поле)
  type?: string; // Тип продукта (необязательное поле)
}

// Определение резолверов для мутаций
const productMutationResolvers = {
  Mutation: {
    // Мутация для добавления нового продукта
    addProduct: async (_: any, args: AddProductArgs) => {
      try {
        // Деструктуризация аргументов
        const { name, img, category } = args;

        // Проверка обязательных полей
        if (!name || !img || !category) {
          throw new Error('All fields are required: name, img, category');
        }

        // Создание нового экземпляра продукта с использованием переданных аргументов
        const newProduct = new Product(args);

        // Сохранение нового продукта в базе данных
        await newProduct.save();

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
      } catch (error) {
        // Логирование ошибки и выброс исключения
        console.error(error);
        throw new Error("Error adding product");
      }
    },
  },
};

// Экспорт резолверов мутаций
export default productMutationResolvers;

