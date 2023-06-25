import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

//User Component
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetails from "./components/product/ProductDetails";
import Checkout from "./components/cart/Checkout";
import Login from "./components/Login";
import SignUp from "./components/Signup";

import Error404 from "./components/Error404";

//Admin Component
import SideNav from "./components/Admin/SideNav";
import Order from "./components/Admin/Order";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* User Routes */}
                    <Route path="/*" element={<UserLayout />} />

                    {/* Admin Routes */}
                    <Route path="/e-shop-admin/*" element={<AdminLayout />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

function UserLayout() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products/*" element={<Products />} />
                <Route path="/product-details/*" element={<ProductDetails />} />
                <Route path="/product-checkout" element={<Checkout />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </>
    );
}

function AdminLayout() {
    return (
        <div className="w-screen flex flex-row flex-grow overflow-auto">
            <SideNav />
            <div className="flex flex-col h-screen w-[calc(100vw-256px)] overflow-x-auto">
                <div className="bg-gray-100 py-3 px-5 h-14 shadow flex items-center">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                </div>
                <div className="h-full bg-slate-200 p-5">
                    <div className="h-full bg-gray-100 shadow-lg rounded-lg overflow-x-auto">
                        {/* content */}
                        <Routes>
                            <Route path="/orders" element={<Order />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
