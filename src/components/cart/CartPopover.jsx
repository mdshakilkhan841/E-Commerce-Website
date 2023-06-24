import { useState, useEffect, useRef } from "react";
import { BsCart3 } from "react-icons/bs";
import Cart from './Cart';

const CartPopover = () => {

    const [isUserMenuVisible, setUserMenuVisible] = useState(false);
    const appRef = useRef(null);

    //--------------------------------------------------------//
    //Mobile Nav-menu close when click outside the Navbar
    const handleOutsideClick = (e) => {
        if (!appRef.current.contains(e.target)) {
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
        <div  ref={appRef}>
            <button className="mr-3 flex relative justify-center items-center cursor-pointer"
                onClick={() => setUserMenuVisible(!isUserMenuVisible)}>
                <BsCart3 className="text-3xl mr-2" />
                <span className="absolute top-0 right-0 rounded-full bg-green-200 text-pink-600 w-5 h-4 p-0 m-0 font-mono text-sm leading-tight text-center">
                    5
                </span>
            </button>

            {/*---- Cart Menu ----*/}
            <div
                className={
                    isUserMenuVisible
                        ? "shadow-md mt-12 absolute top-0 -right-6 min-w-[400px] max-h-[550px] overflow-y-auto"
                        : "absolute invisible"
                }
            >
                <Cart />
            </div>
        </div>
    )
}

export default CartPopover;