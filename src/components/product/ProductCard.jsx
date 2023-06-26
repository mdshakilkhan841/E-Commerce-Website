import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import ProductCardSkeleton from "../loader/ProductCardSkeleton";

const ProductCard = () => {
    const [products, setProducts] = useState([{}]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        setLoading(true);
        await axios
            .get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data));
        setLoading(false);
    };

    const handleAddCart = (item) => {
        console.log(item);
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const isProductExist = cart.find((prevItem) => prevItem.id === item.id);
        if (isProductExist) {
            const updatedCart = cart.map((product) => {
                if (product.id === item.id) {
                    return { ...product, quantity: product.quantity + 1 }
                }
                return product
            })
            localStorage.setItem("cart", JSON.stringify(updatedCart))
        } else{
            localStorage.setItem("cart", JSON.stringify([...cart, {...item, quantity:1}]))
        }
    };

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-20 pb-14 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {loading ? (
                            <ProductCardSkeleton />
                        ) : (
                            products.map((item, index) => (
                                <div
                                    key={index}
                                    className="xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 p-4"
                                >
                                    <div className="shadow-lg">
                                        <div className="block relative h-48 mt-3 overflow-hidden">
                                            <img
                                                alt="e-commerce"
                                                className="object-contain object-center w-full h-full block"
                                                src={item.image}
                                            />
                                        </div>
                                        <div className="mt-2 p-3">
                                            <Link to={`/products/${item.id}`}>
                                                <h3 className="text-gray-500 text-xs hover:font-semibold uppercase tracking-widest title-font">
                                                    {item.category}
                                                </h3>
                                                <h2 className="text-gray-900 title-font text-m font-medium hover:font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
                                                    {item.title}
                                                </h2>
                                            </Link>
                                            <div className="flex items-center justify-between mt-1">
                                                <p className="">
                                                    <span className="font-extrabold">৳ </span>
                                                    {item.price}
                                                </p>
                                                <button
                                                    className="bg-pink-500 text-white active:bg-pink-600 font-bold text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => handleAddCart(item)}
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCard;
