import React from "react";
import ProductList from "../components/ProductList";

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
            <ProductList/>
        </div>
    );
};

export default Products;
