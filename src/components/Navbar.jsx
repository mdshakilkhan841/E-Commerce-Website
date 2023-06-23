import { useState, useEffect, useRef } from "react";
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';



const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isUserMenuVisible, setUserMenuVisible] = useState(false);

    const appRef = useRef(null);

    //--------------------------------------------------------//
    //Mobile Nav-menu close when click outside the Navbar 
    const handleOutsideClick = (e) => {
        if (!appRef.current.contains(e.target)) {
            setNavbarOpen(false);
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
        <nav ref={appRef} className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500" >
            <div className="container px-4 mx-auto flex flex-row flex-wrap items-center justify-between">
                <div className="flex justify-between md:w-auto md:static md:block md:justify-start">
                    <div className="text-md font-bold leading-relaxed italic text-white cursor-pointer">
                        E-Commerce
                    </div>
                </div>

                <div className={"md:flex " + (navbarOpen ? "w-full md:w-auto flex items-center md:relative absolute left-0 md:mt-0 mt-[170px] bg-green-500 " : " hidden")}>
                    <ul className="w-full flex flex-col md:flex-row list-none md:ml-auto md:border-0 border-t border-black">
                        <li className="md:px-3 px-8 py-2 flex items-center text-bas font-bold leading-snug text-black hover:opacity-70 cursor-pointer hover:bg-green-400 md:hover:bg-transparent">
                            Products
                        </li>
                        <li className="md:px-3 px-8 py-2 flex items-center text-bas font-bold leading-snug text-black hover:opacity-70 cursor-pointer hover:bg-green-400 md:hover:bg-transparent">
                            About
                        </li>
                        <li className="md:px-3 px-8 py-2 flex items-center text-bas font-bold leading-snug text-black hover:opacity-70 cursor-pointer hover:bg-green-400 md:hover:bg-transparent">
                            Contact
                        </li>
                    </ul>
                </div>

                <div className="flex relative float-right">
                    <button
                        className="flex items-center focus:outline-none mr-3"
                        onClick={() => setUserMenuVisible(!isUserMenuVisible)}
                    >
                        <img
                            className="w-8 h-8 rounded-full mr-3"
                            src="http://i.pravatar.cc/300"
                            alt="Avatar of User"
                        />
                        <span className="hidden md:inline-block mr-2 font-semibold">Shakil Khan</span>
                        <FiChevronDown />
                    </button>
                    <div className={
                            isUserMenuVisible
                                ? "bg-white rounded shadow-md mt-12 absolute top-0 right-0 min-w-full overflow-auto z-30"
                                : "absolute invisible" }>
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
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <FiMenu /> 
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;