import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri"

const Cart = () => {
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold leadi sm:pr-8">Polaroid camera</h3>
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
                                <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                    <span>Add to favorites</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none  bg-gray-500" src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="Replica headphones" />
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold leadi sm:pr-8">Replica headphones</h3>
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
                                <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                    <span>Add to favorites</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none  bg-gray-500" src="https://images.unsplash.com/photo-1594549181132-9045fed330ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="Set of travel chargers" />
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold leadi sm:pr-8">Set of travel chargers</h3>
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
                                <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                    <span>Add to favorites</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="space-y-1 text-right">
                <p>Total amount :
                    <span className="font-semibold"> 357 <span className='font-extrabold'>৳ </span></span>
                </p>
                <p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
            </div>
            <div className="flex justify-end space-x-4">
                {/* <button type="button" className="px-6 py-2 border rounded-md border-violet-400">Back
                    <span className="sr-only sm:not-sr-only">to shop</span>
                </button> */}
                <button className="flex ml-auto bg-pink-500 text-white active:bg-pink-600 px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" type="button">
                    <span className="sr-only sm:not-sr-only">Continue to</span>
                    <span>Checkout</span>
                </button>
            </div>
        </div>
    )
}

export default Cart