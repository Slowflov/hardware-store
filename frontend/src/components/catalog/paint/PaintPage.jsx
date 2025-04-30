import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import ProductCard from "../../../components/card/ProductCard";
import FilterPanel from "../../card/filters/FilterPanel";
import SortProducts from "../../card/filters/SortProducts";
import Pagination from "../../card/Pagination";
import useSessionStorage from "../../hooks/useSessionStorage";
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

const PaintPage = () => {
  const [currentPage, setCurrentPage] = useSessionStorage("currentPage", 1);
  const pageSize = 9;
  const [sortType, setSortType] = useSessionStorage("sortType", "latest");
  const [filters, setFilters] = useSessionStorage("filters", {});

  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS, {
    variables: {
      category: "paint",
      sortBy: sortType,
      page: currentPage,
      pageSize,
      priceRange: filters.priceRange,
      typeFilter: filters.typeFilter,
    },
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (data?.getProducts) {
      setFilteredProducts(data.getProducts.products);
    }
  }, [data]);

  const handleFilterChange = (newFilters) => {
    const priceRange = newFilters.find(filter => filter.key === 'priceRange')?.value || priceRanges['paint'];
    const typeFilter = newFilters.find(filter => filter.key === 'typeFilter')?.value || [];
  
    setFilters({ priceRange, typeFilter });
    setCurrentPage(1);
    refetch({
      category: "paint",
      sortBy: sortType,
      page: 1,
      pageSize,
      priceRange,
      typeFilter,
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    refetch({
      category: "paint",
      sortBy: sortType,
      page,
      pageSize,
      priceRange: filters.priceRange,
      typeFilter: filters.typeFilter,
    });
  };

  if (loading) return <p className="text-center p-4">Загрузка...</p>;
  if (error) return <p className="text-center text-red-500">Ошибка: {error.message}</p>;

  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <nav className="text-gray-600 text-sm mb-4">
        <Link to="/" className="hover:underline">Главная</Link> <span> » </span>
        <span className="text-gray-800 font-semibold">Краски</span>
      </nav>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl sm:text-4xl font-bold text-black">Краски</h1>
        <SortProducts sortType={sortType} setSortType={setSortType} />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50%] w-full mb-4 md:mb-0 mr-6">
          <FilterPanel
            category="paint"
            products={data?.getProducts?.products || []}
            onFilterChange={handleFilterChange}
          />
        </div>

        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="w-full text-center text-gray-500 text-3xl py-10 col-span-full">
              Товары не найдены. Попробуйте изменить фильтры.
            </div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                className="w-full"
                img={`/images/paint/${product.img}`}
                name={product.name}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                availability={product.availability}
                code={product.code}
                quantity={product.quantity}
                customPrice={product.customPrice}
                type={product.type}
              />
            ))
          )}
        </div>
      </div>

      <Pagination
        totalPages={data?.getProducts?.totalPages || 1}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaintPage;