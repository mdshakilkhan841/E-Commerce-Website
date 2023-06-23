import { useState, useEffect, useRef } from "react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { FaShopify } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [isUserMenuVisible, setUserMenuVisible] = useState(false);
    // console.log(mobileMenu)
    const appRef = useRef(null);

    //--------------------------------------------------------//
    //Mobile Nav-menu close when click outside the Navbar
    const handleOutsideClick = (e) => {
        if (!appRef.current.contains(e.target)) {
            setMobileMenu(false);
            setUserMenuVisible(false);
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    //-------------------------- -----------------------------//

    return (
        <nav
            ref={appRef}
            className="fixed w-full z-10 top-0 shadow flex flex-wrap items-center justify-between px-2 py-3 bg-fuchsia-200"
        >
            <div className="container px-4 mx-auto flex flex-row flex-wrap items-center justify-between">
                <Link
                    to={"/"}
                    className="flex flex-row items-center justify-between md:w-auto md:static md:justify-start space-x-2 cursor-pointer"
                >
                    <FaShopify className="text-2xl" />
                    <div className="text-md font-bold leading-relaxed italic">
                        E-Commerce
                    </div>
                </Link>

                <div
                    className={
                        "md:flex " +
                        (mobileMenu
                            ? "w-full md:w-auto flex items-center md:relative absolute left-0 md:mt-0 mt-[170px] bg-fuchsia-200 "
                            : " hidden")
                    }
                >
                    <ul className="w-full flex flex-col md:flex-row list-none md:ml-auto md:border-0 border-t border-black">
                        <li className="md:px-3 px-8 py-2 flex items-center text-base font-semibold hover:font-bold leading-snug text-black cursor-pointer hover:bg-fuchsia-300 md:hover:bg-transparent">
                            <Link to={"/products"} >Products</Link>
                        </li>
                        <li className="md:px-3 px-8 py-2 flex items-center text-base font-semibold hover:font-bold leading-snug text-black cursor-pointer hover:bg-fuchsia-300 md:hover:bg-transparent">
                            About
                        </li>
                        <li className="md:px-3 px-8 py-2 flex items-center text-base font-semibold hover:font-bold leading-snug text-black cursor-pointer hover:bg-fuchsia-300  md:hover:bg-transparent">
                            Contact
                        </li>
                    </ul>
                </div>

                <div className="flex relative float-right">
                    {/*---- Cart div ----*/}
                    <div className="mr-3 flex relative justify-center items-center cursor-pointer">
                        <BsCart3 className="text-3xl mr-2" />
                        <span class="absolute top-0 right-0 rounded-full bg-green-200 text-pink-600 w-5 h-4 p-0 m-0 font-mono text-sm leading-tight text-center">
                            5
                        </span>
                    </div>

                    {/*---- Profile Div ----*/}
                    <button
                        className="flex items-center focus:outline-none mr-3"
                        onClick={() => setUserMenuVisible(!isUserMenuVisible)}
                    >
                        <img
                            className="w-8 h-8 rounded-full mr-3"
                            src="http://i.pravatar.cc/300"
                            alt="Avatar of User"
                        />
                        <span className="hidden md:inline-block mr-2 font-semibold">
                            Shakil Khan
                        </span>
                        <FiChevronDown />
                    </button>

                    {/*---- Profile Menu ----*/}
                    <div
                        className={
                            isUserMenuVisible
                                ? " bg-slate-50 shadow-md mt-12 absolute top-0 right-0 min-w-full overflow-auto z-30"
                                : "absolute invisible"
                        }
                    >
                        <ul className="list-reset">
                            <li className="px-4 py-2 block text-gray-900 hover:bg-gray-200  hover: cursor-pointer">
                                My account
                            </li>
                            <li className="px-4 py-2 block text-gray-900 hover:bg-gray-200  hover: cursor-pointer">
                                Notifications
                            </li>
                            <li>
                                <hr className="border-t mx-2 border-gray-400" />
                            </li>
                            <li className="px-4 py-2 block text-gray-900 hover:bg-gray-200  hover: cursor-pointer">
                                Logout
                            </li>
                        </ul>
                    </div>

                    {/*---- Hamburger Icon  ----*/}
                    <button
                        className=" cursor-pointer text-xl px-3 py-2 leading-none border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setMobileMenu(!mobileMenu)}
                    >
                        {!mobileMenu ? "☰" : <MdClose />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
