import React, { useEffect, useState } from "react";
import ProductCard from "../card/ProductCard";
import FilterPanel from "../card/filters/FilterPanel";
import SortProducts from "../card/filters/SortProducts";
import Pagination from "../card/Pagination";
import Breadcrumb from "../Breadcrumb";

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
    if (data?.getProducts?.products) {
      setFilteredProducts(data.getProducts.products);
    }
  }, [data]);

  const handleFilterChange = (newFilters) => {
    console.log("handleFilterChange called with:", newFilters);
    const price = newFilters.find((f) => f.key === "priceRange")?.value || priceRanges[category];
    const typeFilter = newFilters.find((f) => f.key === "typeFilter")?.value || [];

    if (filters.price !== price || filters.typeFilter !== typeFilter) {
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
    }
  };

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      onRefetch({
        category,
        sortBy: sortType,
        page,
        pageSize: 9,
        priceRange: filters.price,
        typeFilter: filters.typeFilter,
      });
    }
  };

  if (loading) return <p className="text-center p-4">Загрузка...</p>;
  if (error) return <p className="text-center text-red-500">Ошибка: {error.message}</p>;

  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <Breadcrumb
        paths={[
          { label: "Главная", link: "/" },
          { label: "Каталог", link: "/catalog" },
          { label: title },
        ]}
      />

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

        <div className="flex-grow grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="w-full text-center text-gray-500 text-3xl py-10 col-span-full">
              Товары не найдены. Попробуйте изменить фильтры.
            </div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                img={`/images/${category}/${product.img}`}
                name={product.name}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                availability={product.availability}
                code={product.code}
                quantity={product.quantity}
                customPrice={product.customPrice}
                productId={product.id}
                category={category}
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

export default PageLayout;
