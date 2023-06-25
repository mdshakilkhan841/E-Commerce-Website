import React from "react";
import { FaShopify } from "react-icons/fa";
import {
    HiOutlineHome,
    HiOutlineMail,
    HiOutlineChartBar,
    HiOutlineFolder,
    HiOutlineDatabase,
    HiOutlineUsers,
    HiOutlineChevronDown,
    HiOutlineUserAdd,
    HiOutlineUserGroup
} from "react-icons/hi";
import { MdOutlineTrendingUp } from "react-icons/md";
import { Link } from "react-router-dom";

const SideNav = () => {
    return (
        <div className="h-screen w-64 bg-gray-100">
            <div className="flex h-full flex-grow flex-col overflow-y-auto bg-white shadow">
                <div className="fixed z-30 bg-gray-100 flex justify-between h-14 w-64 space-x-4 p-3 shadow">
                    <Link to={"/e-shop-admin"} className="flex space-x-2">
                        <FaShopify className="text-3xl" />
                        <div className="text-lg font-bold leading-relaxed italic flex items-center">
                            E-Shop Admin
                        </div>
                    </Link>
                </div>

                <div className="flex items-center p-4 mt-14 ">
                    <img
                        className="h-10 w-auto rounded-full max-w-full align-middle"
                        src="http://i.pravatar.cc/300"
                        alt=""
                    />
                    <div className="flex ml-3 flex-col">
                        <h3 className="font-medium">Shakil Khan</h3>
                        <p className="text-xs text-gray-500">Admin</p>
                    </div>
                </div>

                <div className="flex flex-1 flex-col">
                    <div className="">

                        <nav className="flex-1">
                            <Link
                                to={"/e-shop-admin/messages"}
                                className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                            >
                                <HiOutlineMail className="text-2xl mr-4" />
                                Messages
                                <span className="ml-auto rounded-full bg-rose-600 px-2 text-xs text-white">
                                    6
                                </span>
                            </Link>
                        </nav>

                        <span className="ml-3 mt-5 mb-2 block text-xs font-semibold text-gray-500">
                            Analytics
                        </span>

                        <nav className="flex-1">
                            <Link
                                to={"/e-shop-admin/dashboard"}
                                title=""
                                className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-rose-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                            >
                                <HiOutlineHome className="text-2xl mr-4" />
                                Dashboard
                            </Link>

                            <div className="relative transition">
                                <input
                                    className="peer hidden"
                                    type="checkbox"
                                    id="menu-1"
                                // defaultChecked
                                />
                                <button className="flex peer relative w-full items-center border-l-rose-600 py-3 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600 focus:border-l-4">
                                    <HiOutlineChartBar className="text-2xl mr-4" />
                                    Analytics
                                    <label
                                        htmlFor="menu-1"
                                        className="absolute inset-0 h-full w-full cursor-pointer"
                                    ></label>
                                </button>
                                <HiOutlineChevronDown className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-600 transition peer-checked:rotate-180 peer-hover:text-rose-600" />

                                <ul className="duration-400 flex m-2 max-h-0 flex-col overflow-hidden rounded bg-gray-100 font-medium transition-all duration-300 peer-checked:max-h-96">
                                    <li>
                                        <Link
                                            to={"/e-shop-admin/revenues"}
                                            className="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600 focus:border-l-4"
                                        >
                                            <MdOutlineTrendingUp className="text-2xl mr-4" />
                                            Revenue
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/e-shop-admin/refunds"}
                                            className="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600 focus:border-l-4"
                                        >
                                            <HiOutlineChartBar className="text-2xl mr-4" />
                                            Refunds
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <span className="ml-3 mt-5 mb-2 block text-xs font-semibold text-gray-500">
                            Product Management
                        </span>

                        <nav className="flex-1">
                            <Link
                                to={"/e-shop-admin/all-products"}
                                className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                            >
                                <HiOutlineFolder className="text-2xl mr-4" />
                                Products
                            </Link>

                            <Link
                                to={"/e-shop-admin/orders"}
                                className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                            >
                                <HiOutlineDatabase className="text-2xl mr-4" />
                                Orders
                            </Link>

                            <div className="relative transition">
                                <input
                                    className="peer hidden"
                                    type="checkbox"
                                    id="menu-2"
                                // defaultChecked
                                />
                                <button className="flex peer relative w-full items-center border-l-rose-600 py-3 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600 focus:border-l-4">
                                    <HiOutlineUsers className="text-2xl mr-4" />
                                    Users
                                    <label
                                        htmlFor="menu-2"
                                        className="absolute inset-0 h-full w-full cursor-pointer"
                                    ></label>
                                </button>
                                <HiOutlineChevronDown className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-600 transition peer-checked:rotate-180 peer-hover:text-rose-600" />

                                <ul className="duration-400 flex m-2 max-h-0 flex-col overflow-hidden rounded bg-gray-100 font-medium transition-all duration-300 peer-checked:max-h-96">
                                    <li>
                                        <Link
                                            to={"/e-shop-admin/customers"}
                                            className="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600 focus:border-l-4"
                                        >
                                            <HiOutlineUserAdd className="text-2xl mr-4" />
                                            Customers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/e-shop-admin/employees"}
                                            className="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600 focus:border-l-4"
                                        >
                                            <HiOutlineUserGroup className="text-2xl mr-4" />
                                            Employees
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNav;
