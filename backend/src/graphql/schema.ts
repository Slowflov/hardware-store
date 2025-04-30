import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Product {
    id: ID!
    img: String
    name: String
    oldPrice: Float
    newPrice: Float
    availability: String
    code: String
    quantity: Int
    customPrice: Float
    type: String
    category: String
  }

  type ProductList {
    products: [Product]
    totalPages: Int
  }

  input FilterInput {
    priceRange: [Float]
    typeFilter: [String]
  }

  type Query {
    getProducts(
      category: String,
      sortBy: String,
      page: Int,
      pageSize: Int,
      filters: FilterInput
    ): ProductList
  }

  type Mutation {
    addProduct(
      name: String!
      img: String!
      category: String!
      oldPrice: Float
      newPrice: Float
      availability: String
      code: String
      quantity: Int
      customPrice: Float
      type: String
    ): Product
  }
`;

export default typeDefs;
