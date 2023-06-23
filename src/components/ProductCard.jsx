import React from "react";
import { Link } from "react-router-dom";
import SkeletonLoader from "../components/SkeletonLoader";

const ProductCard = () => {

    const products = [
        {
            "id": 1,
            "category": "Electronics",
            "title": "Smartphone",
            "price": 799.99,
            "image": "https://dummyimage.com/420x260"
        },
        {
            "id": 2,
            "category": "Clothing",
            "title": "Men's T-Shirt",
            "price": 29.99,
            "image": "https://dummyimage.com/420x260"
        },
        {
            "id": 3,
            "category": "Home Decor",
            "title": "Throw Pillow",
            "price": 19.99,
            "image": "https://dummyimage.com/420x260"
        },
        {
            "id": 4,
            "category": "Books",
            "title": "Novel",
            "price": 12.99,
            "image": "https://dummyimage.com/420x260"
        },
        {
            "id": 5,
            "category": "Beauty",
            "title": "Lipstick",
            "price": 9.99,
            "image": "https://dummyimage.com/420x260"
        },
        {
            "id": 6,
            "category": "Sports",
            "title": "Yoga Mat",
            "price": 24.99,
            "image": "https://dummyimage.com/420x260"
        },
        {
            "id": 7,
            "category": "Kitchen",
            "title": "Coffee Maker",
            "price": 59.99,
            "image": "https://dummyimage.com/420x260"
        },
        {
            "id": 8,
            "category": "Toys",
            "title": "Action Figure",
            "price": 14.99,
            "image": "https://dummyimage.com/420x260"
        },
        {
            "id": 9,
            "category": "Garden",
            "title": "Plant Pot",
            "price": 7.99,
            "image": "https://dummyimage.com/420x260"
        },
        {
            "id": 10,
            "category": "Electronics",
            "title": "Wireless Headphones",
            "price": 149.99,
            "image": "https://dummyimage.com/420x260"
        },
        {
            "id": 9,
            "category": "Garden",
            "title": "Plant Pot",
            "price": 7.99,
            "image": "https://dummyimage.com/420x260"
        }
    ]


    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-20 pb-14 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            products.map((item) => (
                                <div key={item.id} className="xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 p-4">
                                    <div className="border border-black">
                                        <div className="block relative h-48 overflow-hidden">
                                            <img
                                                alt="e-commerce"
                                                className="object-cover object-center w-full h-full block"
                                                src={item.image}
                                            />
                                        </div>
                                        <div className="mt-2 p-2">
                                            <Link to={"/product-details"}>
                                                <h3 className="text-gray-500 text-xs hover:font-semibold uppercase tracking-widest title-font">
                                                    {item.category}
                                                </h3>
                                                <h2 className="text-gray-900 title-font text-m font-medium hover:font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
                                                    {item.title}
                                                </h2>
                                            </Link>
                                            <div className="flex justify-between mt-1">
                                                <p className="">
                                                    <span className="font-extrabold">৳ </span>{item.price}
                                                </p>
                                                <button
                                                    className="bg-pink-500 text-white active:bg-pink-600 font-bold text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <SkeletonLoader/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCard;
