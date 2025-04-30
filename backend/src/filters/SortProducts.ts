export const getSortOptions = (sortBy: string) => {
  const sortOptions: any = {};

  if (sortBy === "price_asc") {
    sortOptions.newPrice = 1; // Сортировка по цене по возрастанию
  } else if (sortBy === "price_desc") {
    sortOptions.newPrice = -1; // Сортировка по цене по убыванию
  } else if (sortBy === "discount") {
    return { discount: -1 }; // Сортировка по скидке
  } else if (sortBy === "latest") {
    sortOptions._id = -1; // Сортировка по новизне (например, по ID или времени добавления)
  }

  return sortOptions;
};

