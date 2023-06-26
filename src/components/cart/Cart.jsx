import React, {useState, useEffect} from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ carts, setCarts }) => {
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const total = carts?.reduce((acc, item) => {
            return acc + item?.price * item?.quantity;
        }, 0);
        setTotal(total);
    }, [carts]);

    const handleInc = (id) => {
        const updatedCart = carts?.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCarts(updatedCart);
    }

    const handleDec = (id) => {
        const updatedCart = carts?.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCarts(updatedCart);
    }

    const removeProduct = (id) => {
        const updatedCart = carts?.filter(item => item.id !== id)
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCarts(updatedCart);
    }

    if (carts.length === 0) {
        return (
            <div className="flex flex-col p-6 space-y-2 bg-gray-900 text-gray-100">
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <h2 className="text-xl font-semibold mt-10 text-center">Empty ☹</h2>
            </div>
        )
    }

    return (
        <div className="flex flex-col p-6 space-y-2 bg-gray-900 text-gray-100">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
                {
                    carts?.map((cart, index) => {
                        return (
                            <li key={index} className="flex flex-col py-3">
                                <div className="flex w-full items-center space-x-2">
                                    <img className="flex-shrink-0 w-20 h-20 border-transparent rounded outline-none bg-gray-500" src={cart?.image} alt={cart?.title} />
                                    <div className="flex flex-col justify-between w-full">
                                        <div className="flex justify-between w-full pb-2 space-x-2">
                                            <div className="space-y-1">
                                                <h3 className="t">{cart?.title}</h3>
                                                <p className="text-sm text-gray-400">{cart?.category}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-lg font-semibold">{cart?.price} <span className='font-extrabold'>৳</span></p>
                                            </div>
                                        </div>
                                        <div className="flex text-sm divide-x">
                                            <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1"
                                                onClick={() => removeProduct(cart?.id)}>
                                                <RiDeleteBin6Line className='text-lg' />
                                                <span>Remove</span>
                                            </button>
                                            <div className="sm:order-1 flex h-7 text-black px-3">
                                                <button className="flex items-center justify-center rounded-l-sm bg-pink-300 px-4 transition hover:bg-pink-500 hover:text-white"
                                                    onClick={() => handleDec(cart?.id)}
                                                >-</button>
                                                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{cart?.quantity}</div>
                                                <button className="flex items-center justify-center rounded-r-sm bg-pink-300 px-4 transition hover:bg-pink-500 hover:text-white"
                                                    onClick={() => handleInc(cart?.id)}
                                                >+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="space-y-1 text-right py-2">
                <p>Total amount :
                    <span className="font-semibold"> {total.toFixed(2)} <span className='font-extrabold'>৳ </span></span>
                </p>
                <p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
            </div>
            <div className="flex justify-end">
                <Link to={"/product-checkout"}>
                    <button className="flex bg-pink-500 text-white active:bg-pink-600 px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none" type="button">
                        <span className="sr-only sm:not-sr-only">Continue to</span>
                        <span>Checkout</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Cart;