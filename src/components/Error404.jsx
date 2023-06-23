import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">
                        Sorry, we couldn't find this page.
                    </p>
                    <p className="mt-4 mb-8 dark:text-gray-400">
                        But dont worry, you can find plenty of other things on our homepage.
                    </p>
                    <Link to={"/"}>
                        <button
                            className="bg-pink-500 text-white active:bg-pink-600 font-bold px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button">
                            Back to homepage
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Error404;
