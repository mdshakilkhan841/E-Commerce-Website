import React from "react";
import { FaShopify, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="px- w-full divide-y bg-gray-800 text-gray-100">
            <div className="container flex flex-col justify-between px-6 py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        className="flex justify-center space-x-3 lg:justify-start"
                    >
                        <div className="flex items-center justify-center text-3xl rounded-full dark:bg-violet-400">
                            <FaShopify/>
                        </div>
                        <span className="self-center text-2xl font-semibold">
                            E-Commerce
                        </span>
                    </a>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-50">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Integrations
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-50">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-50">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Public API
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Guides
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-50">Social media</div>
                        <div className="flex items-center justify-start space-x-3 text-2xl">
                            <FaFacebook/>
                            <FaTwitter/>
                            <FaInstagram/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-400">
                © 2023 Company Co. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
