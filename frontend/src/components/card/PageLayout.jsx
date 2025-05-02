import React, { useEffect, useState } from "react";
import ProductCard from "../card/ProductCard";
import FilterPanel from "../card/filters/FilterPanel";
import SortProducts from "../card/filters/SortProducts";
import Pagination from "../card/Pagination";

const PageLayout = ({
  title,
  category,
  data,
  loading,
  error,
  currentPage,
  setCurrentPage,
  sortType,
  setSortType,
  filters,
  setFilters,
  onRefetch,
  priceRanges,
}) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (data?.getProducts) {
      setFilteredProducts(data.getProducts.products);
    }
  }, [data]);

  const handleFilterChange = (newFilters) => {
    const price = newFilters.find((f) => f.key === "priceRange")?.value || priceRanges[category];
    const typeFilter = newFilters.find((f) => f.key === "typeFilter")?.value || [];

    setFilters({ price, typeFilter });
    setCurrentPage(1);
    onRefetch({
      category,
      sortBy: sortType,
      page: 1,
      pageSize: 9,
      priceRange: price,
      typeFilter,
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onRefetch({
      category,
      sortBy: sortType,
      page,
      pageSize: 9,
      priceRange: filters.price,
      typeFilter: filters.typeFilter,
    });
  };

  if (loading) return <p className="text-center p-4">Загрузка...</p>;
  if (error) return <p className="text-center text-red-500">Ошибка: {error.message}</p>;

  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <nav className="text-gray-600 text-sm mb-4">
        <a href="/" className="hover:underline">Главная</a> <span> » </span>
        <span className="text-gray-800 font-semibold">{title}</span>
      </nav>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl sm:text-4xl font-bold text-black">{title}</h1>
        <SortProducts sortType={sortType} setSortType={setSortType} />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50%] w-full mb-4 md:mb-0 mr-6">
          <FilterPanel
            category={category}
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
              <ProductCard key={product.id} {...product} img={`/images/${category}/${product.img}`} />
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

export default PageLayout;
