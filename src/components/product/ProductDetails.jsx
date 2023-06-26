import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaHeart,
    FaStar,
    FaArrowLeft,
    FaAngleDown,
} from "react-icons/fa";
import ScrollTop from "../ScrollTop";
import Error404 from "../Error404";

const ProductDetails = () => {
    const [item, setItem] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getSingleProduct();
    }, []);

    const getSingleProduct = async () => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setItem(res.data));
    };

    const handleAddCart = (item, redirect) => {
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
        } else {
            localStorage.setItem("cart", JSON.stringify([...cart, { ...item, quantity: 1 }]))
        }

        //redirect (true) use for instant Buy Now button
        if(redirect){
            navigate("/product-checkout")
        }
    };

    // if(!Object.keys(item).length > 0) return <Error404 />

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <ScrollTop />
            <div className="container px-5 py-24 mx-auto">
                <div className="md:absolute">
                    <button
                        className="flex items-center space-x-2 bg-pink-500 text-white active:bg-pink-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => navigate(-1)}
                    >
                        <FaArrowLeft />
                        <span>Back</span>
                    </button>
                </div>
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="e-commerce"
                        className="lg:w-1/2 w-full lg:h-auto max-h-[500px] object-contain object-center rounded"
                        src={item?.image}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font capitalize text-gray-500 tracking-widest">
                            {item?.category}
                        </h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                            {item?.title}
                        </h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <FaStar className="text-indigo-500" />
                                <FaStar className="text-indigo-500" />
                                <FaStar className="text-indigo-500" />
                                <FaStar className="text-indigo-500" />
                                <FaStar />
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                                <FaFacebook />
                                <FaTwitter />
                                <FaInstagram />
                            </span>
                        </div>
                        <p className="leading-relaxed text-justify">
                            {item?.description}
                        </p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <FaAngleDown />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="title-font font-medium text-2xl text-gray-900">
                                <span className="font-extrabold">৳ </span>{item?.price}
                            </span>
                            <button
                                className="flex ml-auto bg-pink-500 text-white active:bg-pink-600 font-bold text- px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => handleAddCart(item, true)}
                            >
                                Buy Now
                            </button>
                            <button
                                className="flex ml-4 bg-pink-500 text-white active:bg-pink-600 font-bold text- px-3 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => handleAddCart(item)}
                            >
                                Add to Cart
                            </button>
                            <button className="rounded-full w-10 h-10 text-xl bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <FaHeart />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
