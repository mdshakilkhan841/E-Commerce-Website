import React, { useEffect, useState } from "react";
import ProductCard from "../components/product/ProductCard";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import axios from "axios";
import ProductCardSkeleton from "../components/loader/ProductCardSkeleton";
import useProductStore from "../store/productStore";

const Products = () => {
  const { setProducts, total } = useProductStore();
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  console.log("🚀 ~ Products ~ totalPages:", totalPages);
  const itemsPerPage = 30; // Number of items per page

  const getProduct = async (page) => {
    setLoading(true);
    await axios
      .get(`https://dummyjson.com/products`, {
        params: {
          limit: itemsPerPage,
          skip: (page - 1) * itemsPerPage,
        },
      })
      .then((res) => {
        useProductStore.setState({ total: res.data.total });
        setProducts(res.data.products);
        const round = Math.ceil(res.data.total / 30);
        setTotalPages(round);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getProduct(currentPage);
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <div className="flex flex-col text-center w-full mt-24">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>

      {loading ? <ProductCardSkeleton /> : <ProductCard />}

      {/*---- Pagination -----*/}
      <div className="flex justify-center space-x-1 text-gray-100 pb-24">
        <button
          title="previous"
          type="button"
          className="flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 dark:border-gray-800"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <IoChevronBack />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            type="button"
            className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md ${
              currentPage === index + 1
                ? "bg-gray-900 text-violet-400 border-violet-400"
                : "bg-gray-900 border-gray-800"
            }`}
            title={`Page ${index + 1}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          title="next"
          type="button"
          className="flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
};

export default Products;
