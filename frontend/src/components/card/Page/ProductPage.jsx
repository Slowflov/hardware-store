// ProductPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import ProductDetails from "./ProductDetails";
import categoryTitles from "./PageData";

const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: ID!) {
    getProductById(id: $id) {
      name
      img
      code
      category
      discountThreshold
      customPrice
      availability
      inventoryCount
      oldPrice
      newPrice
      attributes {
        name
        value
      }
      descriptionBlocks {
        title
        content
        horizontal
      }
      details {
        name
        value
      }
    }
  }
`;

const ProductPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;
  if (!data?.getProductById) return <p>Товар не найден.</p>;

  const product = data.getProductById;
  const categoryTitle = categoryTitles[product.category] || "Категория";

  return (
    <ProductDetails
      product={product}
      title={categoryTitle}
      category={product.category}
    />
  );
};

export default ProductPage;
