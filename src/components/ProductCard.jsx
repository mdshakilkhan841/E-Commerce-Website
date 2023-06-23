import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-24 pb-14 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <div className='border border-black'>
                                <div className="block relative h-48 overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                                </div>
                                <div className="mt-2 p-2">
                                    <Link to={"/product-details"} >
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium overflow-hidden whitespace-nowrap overflow-ellipsis">The Catalyzer </h2>
                                    </Link>
                                    <div className='flex justify-between'>
                                        <p className="mt-1"><span className='font-extrabold'>৳ </span>16.00</p>
                                        <button class="bg-pink-500 text-white active:bg-pink-600 font-bold text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductCard