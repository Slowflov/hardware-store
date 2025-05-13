import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Attribute {
    name: String
    value: String
  }

  type DescriptionBlock {
    title: String
    content: String
    horizontal: Boolean # Добавлено поле horizontal
  }

  type Detail {
    name: String
    value: String
    horizontal: Boolean # Добавлено поле horizontal
  }

  # Добавляем Input type для Details с horizontal
  input DetailInput {
    name: String
    value: String
    horizontal: Boolean # Добавлено поле horizontal
  }

  type Product {
    id: ID!
    img: String
    name: String
    oldPrice: Float
    newPrice: Float
    availability: String
    code: String
    discountThreshold: Int
    customPrice: Float
    type: String
    category: String
    inventoryCount: Int
    attributes: [Attribute]
    descriptionBlocks: [DescriptionBlock]
    details: [Detail]
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

    getProductById(id: ID!): Product
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
      discountThreshold: Int
      inventoryCount: Int
      customPrice: Float
      type: String
      details: [DetailInput]
    ): Product
  }
`;

export default typeDefs;
