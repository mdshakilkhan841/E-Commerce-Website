import React from "react";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi"

const Contact = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50 mt-20">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x divide-black">
                <div className="py-6 md:px-6">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center space-x-6">
                            <HiLocationMarker className="text-xl" />
                            <span>Fake address, Dhaka City</span>
                        </p>
                        <p className="flex items-center space-x-6">
                            <HiPhone className="text-xl"/>
                            <span>123456789</span>
                        </p>
                        <p className="flex items-center space-x-6">
                            <HiMail className="text-xl"/>
                            <span>contact@business.com</span>
                        </p>
                    </div>
                </div>
                <div className="p-6 text-gray-100">
                    <form
                        noValidate=""
                        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900"
                    >
                        <h2 className="w-full text-3xl font-bold leadi">Contact us</h2>
                        <div>
                            <label htmlFor="name" className="block mb-1 ml-1">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your name"
                                required=""
                                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 ml-1">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Your email"
                                required=""
                                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1 ml-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                type="text"
                                placeholder="Message..."
                                className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-pink-500 focus:ri hover:ri dark:text-gray-900"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
