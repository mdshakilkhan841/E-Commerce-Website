import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft, FaPlus, FaMinus } from "react-icons/fa";

const Checkout = () => {
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    const carts = JSON.parse(localStorage.getItem("cart")) || [];

    useEffect(() => {
        const total = carts?.reduce((acc, item) => {
            return acc + item?.price * item?.quantity;
        }, 0);
        setTotal(total);
    }, [carts]);

    const handleInc = (id) => {
        const updatedCart = carts?.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        navigate("/product-checkout");
    };

    const handleDec = (id) => {
        const updatedCart = carts?.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity - 1,
                };
            }
            return item;
        });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        navigate("/product-checkout");
    };

    const removeProduct = (id) => {
        const updatedCart = carts.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        navigate("/product-checkout");
    };

    if (carts.length === 0) {
        return (
            <div className=" h-[55vh] flex justify-center items-center text-4xl ">
                Cart is Empty
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-24">
            <div className="flex lg:flex-row flex-col shadow-md my-10">
                <div className="lg:w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">{carts?.length} Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                            Product Details
                        </h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                            Quantity
                        </h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                            Price
                        </h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                            Total
                        </h3>
                    </div>
                    {carts?.map((cart, index) => {
                        return (
                            <div
                                key={index}
                                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-3"
                            >
                                <div className="flex w-2/5">
                                    <div className="w-20">
                                        <img
                                            className="w-20 h-20 object-contain"
                                            src={cart?.image}
                                            alt={cart?.title}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-sm">{cart?.title}</span>
                                        <span className="text-red-500 text-xs capitalize">
                                            {cart?.category}
                                        </span>
                                        <div
                                            className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                                            onClick={() => removeProduct(cart?.id)}
                                        >
                                            Remove
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-1/5">
                                    <FaMinus
                                        onClick={() => handleDec(cart?.id)}
                                        className="fill-current text-gray-600 w-3 cursor-pointer"
                                    />
                                    <input
                                        className="mx-2 border text-center w-8"
                                        type="text"
                                        value={cart?.quantity}
                                    />
                                    <FaPlus
                                        onClick={() => handleInc(cart?.id)}
                                        className="fill-current text-gray-600 w-3 cursor-pointer"
                                    />
                                </div>
                                <span className="text-center w-1/5 font-semibold text-sm">
                                    <span className="font-extrabold">৳ </span>
                                    {cart?.price}
                                </span>
                                <span className="text-center w-1/5 font-semibold text-sm">
                                    <span className="font-extrabold">৳ </span>
                                    {(cart?.price * cart?.quantity).toFixed(2)}
                                </span>
                            </div>
                        );
                    })}

                    <div className="flex font-semibold text-indigo-600 text-sm mt-10">
                        <Link
                            to={"/products"}
                            className="flex items-center cursor-pointer space-x-2"
                        >
                            <FaLongArrowAltLeft className="text-2xl font-extrabold " />
                            <span>Continue Shopping</span>
                        </Link>
                    </div>
                </div>

                <div id="summary" className="lg:w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">
                        Order Summary
                    </h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">
                            Items {carts?.length}
                        </span>
                        <span className="font-semibold text-sm">
                            {total?.toFixed(2)}
                            <span className="font-extrabold">৳ </span>
                        </span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">
                            Shipping
                        </label>
                        <select className="block p-2 text-gray-600 w-full text-sm border">
                            <option value="60">Standard Shipping - ৳ 60.00</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label
                            htmlFor="promo"
                            className="font-semibold inline-block mb-3 text-sm uppercase"
                        >
                            Promo Code
                        </label>
                        <input
                            type="text"
                            id="promo"
                            placeholder="Enter your code"
                            className="p-2 text-sm w-full border"
                        />
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                        Apply
                    </button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>
                                <span className="font-extrabold">৳ </span>
                                {(total + 60).toFixed(2)}
                            </span>
                        </div>
                        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
