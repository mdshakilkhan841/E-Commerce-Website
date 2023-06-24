import React from 'react';
import BD from "../assets/bd-flag.png";
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='flex justify-center mt-16 py-20'>
            <div className="container max-w-md p-6 rounded-md sm:p-10 bg-gray-100 border shadow">
                <div className="mb-8 text-center text-gray-700">
                    <h1 className="my-3 text-4xl font-bold">Login</h1>
                    <p className="text-sm">Login to access your account</p>
                </div>
                <form noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm text-gray-700">Phone Number</label>
                            <div className="flex items-center border border-gray-300 rounded">
                                
                                <img src={BD} alt="Bangladesh Flag" className="w-6 h-auto ml-2 mr-2" />
                                <span className='pr-1.5'>+880</span>
                                <input type="tel" pattern="[0-9]{10}" required placeholder="xxx xxx xxxx" className="w-full bg-white rounded-r border-l border-gray-300 focus:ring-2 focus:ring-pink-300 text-base outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                        </div>
                        <div>
                            <div className="flex justify-between mb-2 text-gray-700">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a href="#" className="text-xs hover:underline">Forgot password?</a>
                            </div>
                            <input type="password" required placeholder="********" className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-pink-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-pink-400 hover:bg-pink-500 text-white">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center">Don't have an account yet ?
                            <Link to={"/signup"} className="hover:underline text-blue-500"> Create an account</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;