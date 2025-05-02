import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

// GraphQL-запрос для получения данных о товаре
const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: ID!) {
    getProductById(id: $id) {
      id
      name
      img
    }
  }
`;

const ProductPage = () => {
  const { id } = useParams(); // Получаем id из параметров маршрута

  // Выполняем GraphQL-запрос
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
  });

  if (loading) return <div>Загрузка товара...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  const product = data?.getProductById;

  if (!product) return <div>Товар не найден.</div>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="w-full flex justify-center">
        <img
          src={`/images/paint/${product.img}`} // Путь к изображению
          alt={product.name}
          className="max-h-96 object-contain"
        />
      </div>
      <h1 className="text-2xl font-bold text-center mt-4">{product.name}</h1>
    </div>
  );
};

export default ProductPage;