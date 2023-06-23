import React from "react";
import ProductCard from "../components/ProductCard";
import { IoChevronBack, IoChevronForward } from "react-icons/io5"

const Products = () => {
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

            <ProductCard />

            {/*---- Pagination -----*/}
            <div className="flex justify-center space-x-1 text-gray-100 pb-24">
                <button title="previous" type="button" className="flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 dark:border-gray-800">
                    <IoChevronBack />
                </button>
                <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-900 text-violet-400 border-violet-400">1</button>
                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-900 border-gray-800" title="Page 2">2</button>
                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-900 border-gray-800" title="Page 3">3</button>
                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-900 border-gray-800" title="Page 4">4</button>
                <button title="next" type="button" className="flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800">
                    <IoChevronForward />
                </button>
            </div>
        </div>
    );
}

export default Products;
