import React from "react";
import { FaArrowDown, FaPlus } from "react-icons/fa";

const Customers = () => {
    return (
        <div>
            <div className="mx-auto px-4 py-8 sm:px-8">
                <div className="flex items-center justify-between pb-6">
                    <div>
                        <h2 className="font-semibold text-gray-700">Customer List</h2>
                        <span className="text-xs text-gray-500">
                            View accounts of registered customers
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="ml-10 space-x-8 lg:ml-40">
                            <div className="sm:flex flex-row space-x-4">
                                <button className="flex items-center gap-2 rounded-md bg-pink-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none hover:bg-pink-700">
                                    <FaPlus />
                                    Add New
                                </button>
                                <button className="flex items-center gap-2 rounded-md bg-pink-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none hover:bg-pink-700">
                                    <FaArrowDown />
                                    CSV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-y-hidden rounded-lg border">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-pink-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                                    <th className="px-5 py-3">Sl. No</th>
                                    <th className="px-5 py-3">Cust. ID</th>
                                    <th className="px-5 py-3">Full Name</th>
                                    <th className="px-5 py-3">Phone</th>
                                    <th className="px-5 py-3">Email</th>
                                    <th className="px-5 py-3">Created at</th>
                                    <th className="px-5 py-3">Update</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-500">
                                <tr>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">1</p>
                                    </td>

                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">98646</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0">
                                                <img
                                                    className="h-full w-full rounded-full"
                                                    src="http://i.pravatar.cc/300"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="whitespace-no-wrap">Besique Monroe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">123456789</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">abcd@gmail.com</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">Sep 28, 2022</p>
                                    </td>

                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <div className="flex flex-row space-x-3">
                                            <button className="rounded bg-green-200 hover:bg-green-300 px-3 py-1 text-xs font-semibold text-green-900">
                                                Edit
                                            </button>
                                            <button className="rounded bg-red-200 hover:bg-red-300 px-3 py-1 text-xs font-semibold text-red-900">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">2</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">76526</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0">
                                                <img
                                                    className="h-full w-full rounded-full"
                                                    src="http://i.pravatar.cc/300"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="whitespace-no-wrap">James Cavier</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">123456789</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">abcd@gmail.com</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">Sep 28, 2022</p>
                                    </td>

                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <div className="flex flex-row space-x-3">
                                            <button className="rounded bg-green-200 hover:bg-green-300 px-3 py-1 text-xs font-semibold text-green-900">
                                                Edit
                                            </button>
                                            <button className="rounded bg-red-200 hover:bg-red-300 px-3 py-1 text-xs font-semibold text-red-900">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">3</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">14796</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0">
                                                <img
                                                    className="h-full w-full rounded-full"
                                                    src="http://i.pravatar.cc/300"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="whitespace-no-wrap">Elvis Son</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">123456789</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">abcd@gmail.com</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">Sep 28, 2022</p>
                                    </td>

                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <div className="flex flex-row space-x-3">
                                            <button className="rounded bg-green-200 hover:bg-green-300 px-3 py-1 text-xs font-semibold text-green-900">
                                                Edit
                                            </button>
                                            <button className="rounded bg-red-200 hover:bg-red-300 px-3 py-1 text-xs font-semibold text-red-900">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">4</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">66458</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0">
                                                <img
                                                    className="h-full w-full rounded-full"
                                                    src="http://i.pravatar.cc/300"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="whitespace-no-wrap">Dana White</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">123456789</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">abcd@gmail.com</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">Sep 28, 2022</p>
                                    </td>

                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <div className="flex flex-row space-x-3">
                                            <button className="rounded bg-green-200 hover:bg-green-300 px-3 py-1 text-xs font-semibold text-green-900">
                                                Edit
                                            </button>
                                            <button className="rounded bg-red-200 hover:bg-red-300 px-3 py-1 text-xs font-semibold text-red-900">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">5</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">12644</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0">
                                                <img
                                                    className="h-full w-full rounded-full"
                                                    src="http://i.pravatar.cc/300"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="whitespace-no-wrap">Elvis Son</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">123456789</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">abcd@gmail.com</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <p className="whitespace-no-wrap">Sep 28, 2022</p>
                                    </td>

                                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                                        <div className="flex flex-row space-x-3">
                                            <button className="rounded bg-green-200 hover:bg-green-300 px-3 py-1 text-xs font-semibold text-green-900">
                                                Edit
                                            </button>
                                            <button className="rounded bg-red-200 hover:bg-red-300 px-3 py-1 text-xs font-semibold text-red-900">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col items-center border-t bg-white px-5 py-2 sm:flex-row sm:justify-between">
                        <span className="text-xs text-gray-600 sm:text-sm">
                            {" "}
                            Showing 1 to 5 of 12 Entries{" "}
                        </span>
                        <div className="mt-2 inline-flex sm:mt-0">
                            <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                                Prev
                            </button>
                            <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;
