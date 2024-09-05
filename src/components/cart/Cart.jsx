import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import useProductStore from "../../store/productStore";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } =
    useProductStore();


  if (cart.length === 0) {
    return (
      <div className="flex flex-col p-6 space-y-2 bg-gray-900 text-gray-100">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <h2 className="text-xl font-semibold mt-10 text-center">Empty ☹</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-6 space-y-2 bg-gray-900 text-gray-100">
      <h2 className="text-xl font-semibold">Your Cart</h2>
      <ul className="flex flex-col divide-y divide-gray-700">
        {cart?.map((item, index) => {
          return (
            <li key={index} className="flex flex-col py-3">
              <div className="flex w-full items-center space-x-2">
                <img
                  className="flex-shrink-0 w-20 h-20 border-transparent rounded outline-none bg-gray-500"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <div className="flex flex-col justify-between w-full">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="t">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">
                        {item.price} <span className="font-extrabold">৳</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <RiDeleteBin6Line className="text-lg" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-end">
        <Link to={"/product-checkout"} className="mt-4">
          <button
            className="flex bg-pink-500 text-white active:bg-pink-600 px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none"
            type="button"
          >
            <span className="">Continue to Checkout</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
