import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import Products from "./pages/Products";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {/* <Route path="/" element={<Home/>}/> */}
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/product-details" element={<ProductDetails/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
