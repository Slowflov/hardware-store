"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
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
exports.default = typeDefs;
