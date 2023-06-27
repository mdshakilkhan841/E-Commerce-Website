import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import axios from "axios";
import ProductCardSkeleton from "../loader/ProductCardSkeleton";

const ProductCard = () => {
    const [products, setProducts] = useState([{}]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProduct();
    }, []);

    // console.log(products)
    const getProduct = async () => {
        setLoading(true);
        await axios
            .get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((error) => console.log(error));
        setLoading(false);
    };

    const handleAddCart = (item) => {
        // console.log(item);
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
                                        <Link to={`/products/${item.id}`}>
                                            <div className="block relative h-48 mt-3 overflow-hidden">
                                                <img
                                                    alt="e-commerce"
                                                    className="object-contain object-center w-full h-full block"
                                                    src={item.image}
                                                />
                                            </div>
                                            <div className="mt-2 p-3">

                                                <h3 className="text-gray-500 text-xs hover:font-semibold uppercase tracking-widest title-font">
                                                    {item.category}
                                                </h3>
                                                <h2 className="text-gray-900 title-font text-m font-medium hover:font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
                                                    {item.title}
                                                </h2>

                                            </div>
                                        </Link>
                                        <div className="px-3 pb-3">
                                            <div className="flex items-center space-x-2">
                                                {item.rating && item.rating.rate ? (
                                                    <>
                                                        <p>{item.rating.rate}</p>
                                                        <ReactStars
                                                            value={item.rating.rate}
                                                            count={5}
                                                            size={20}
                                                            edit={false}
                                                            isHalf={true}
                                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                            activeColor={"#398e3c"}
                                                        />
                                                        <p>({item.rating.count})</p>
                                                    </>
                                                ) : (
                                                    <ReactStars
                                                        value={0}
                                                        count={5}
                                                        size={18}
                                                        edit={false}
                                                    />
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between">
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
