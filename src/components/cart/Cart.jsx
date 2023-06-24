import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri"
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className="flex flex-col p-6 space-y-2 bg-gray-900 text-gray-100">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
                <li className="flex flex-col py-3">
                    <div className="flex w-full items-center space-x-2">
                        <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
                        <div className="flex flex-col justify-between w-full">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold">Polaroid camera</h3>
                                    <p className="text-sm text-gray-400">Classic</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-semibold">59.99 <span className='font-extrabold'>৳ </span></p>
                                </div>
                            </div>
                            <div className="flex text-sm divide-x">
                                <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                    <RiDeleteBin6Line className='text-lg' />
                                    <span>Remove</span>
                                </button>
                                <div className="sm:order-1 flex h-7 text-black px-3">
                                    <button className="flex items-center justify-center rounded-l-sm bg-pink-300 px-4 transition hover:bg-pink-500 hover:text-white">-</button>
                                    <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">1</div>
                                    <button className="flex items-center justify-center rounded-r-sm bg-pink-300 px-4 transition hover:bg-pink-500 hover:text-white">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="flex flex-col py-3">
                    <div className="flex w-full items-center space-x-2">
                        <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none  bg-gray-500" src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="Replica headphones" />
                        <div className="flex flex-col justify-between w-full">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold">Replica headphones</h3>
                                    <p className="text-sm text-gray-400">White</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-semibold">99.95 <span className='font-extrabold'>৳ </span></p>
                                </div>
                            </div>
                            <div className="flex text-sm divide-x">
                                <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                    <RiDeleteBin6Line className='text-lg' />
                                    <span>Remove</span>
                                </button>
                                <div className="sm:order-1 flex h-7 text-black px-3">
                                    <button className="flex items-center justify-center rounded-l-sm bg-pink-300 px-4 transition hover:bg-pink-500 hover:text-white">-</button>
                                    <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">1</div>
                                    <button className="flex items-center justify-center rounded-r-sm bg-pink-300 px-4 transition hover:bg-pink-500 hover:text-white">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="flex flex-col py-3">
                    <div className="flex w-full items-center space-x-2">
                        <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none  bg-gray-500" src="https://images.unsplash.com/photo-1594549181132-9045fed330ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="Set of travel chargers" />
                        <div className="flex flex-col justify-between w-full">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold">Set of travel chargers</h3>
                                    <p className="text-sm text-gray-400">Black</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-semibold">8.99 <span className='font-extrabold'>৳ </span></p>
                                </div>
                            </div>
                            <div className="flex text-sm divide-x">
                                <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                    <RiDeleteBin6Line className='text-lg' />
                                    <span>Remove</span>
                                </button>
                                <div className="sm:order-1 flex h-7 text-black px-3">
                                    <button className="flex items-center justify-center rounded-l-sm bg-pink-300 px-4 transition hover:bg-pink-500 hover:text-white">-</button>
                                    <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">1</div>
                                    <button className="flex items-center justify-center rounded-r-sm bg-pink-300 px-4 transition hover:bg-pink-500 hover:text-white">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="space-y-1 text-right py-2">
                <p>Total amount :
                    <span className="font-semibold"> 357 <span className='font-extrabold'>৳ </span></span>
                </p>
                <p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
            </div>
            <div className="flex justify-end">
                <Link to={"/product-checkout"}>
                    <button className="flex ml-auto bg-pink-500 text-white active:bg-pink-600 px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" type="button">
                        <span className="sr-only sm:not-sr-only">Continue to</span>
                        <span>Checkout</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Cart