import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS_FOR_COUNTS = gql`
  query GetAllProductsForCounts($category: String) {
    getProducts(category: $category, pageSize: 1000) {
      products {
        type
      }
    }
  }
`;
