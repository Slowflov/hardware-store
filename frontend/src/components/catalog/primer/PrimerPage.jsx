import React from "react";
import { useQuery, gql } from "@apollo/client";
import useSessionStorage from "../../hooks/useSessionStorage";
import PageLayout from "../../card/PageLayout";
import { priceRanges } from "../../card/filters/filterData";

const GET_PRODUCTS = gql`
  query GetProducts($category: String, $sortBy: String, $page: Int, $pageSize: Int, $priceRange: [Float], $typeFilter: [String]) {
    getProducts(category: $category, sortBy: $sortBy, page: $page, pageSize: $pageSize, filters: { priceRange: $priceRange, typeFilter: $typeFilter }) {
      products {
        id
        name
        img
        oldPrice
        newPrice
        availability
        code
        quantity
        customPrice
        type
      }
      totalPages
    }
  }
`;

const PrimerPage = () => {
  const category = "primer";
  const [currentPage, setCurrentPage] = useSessionStorage("currentPage", 1);
  const [sortType, setSortType] = useSessionStorage("sortType", "latest");
  const [filters, setFilters] = useSessionStorage("filters", {
    price: priceRanges[category] || [0, 10000],
    typeFilter: [],
  });

  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS, {
    variables: {
      category,
      sortBy: sortType,
      page: currentPage,
      pageSize: 9,
      priceRange: filters.price,
      typeFilter: filters.typeFilter,
    },
  });

  return (
    <PageLayout
      title="Грунтовка"
      category={category}
      data={data}
      loading={loading}
      error={error}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      sortType={sortType}
      setSortType={setSortType}
      filters={filters}
      setFilters={setFilters}
      onRefetch={refetch}
      priceRanges={priceRanges}
    />
  );
};

export default PrimerPage;
