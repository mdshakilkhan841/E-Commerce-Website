import React, { useState, useEffect } from "react";
import img from "../../assets/demo-item.jpg";
import {
    AllCheckerCheckbox,
    Checkbox,
    CheckboxGroup,
} from "@createnl/grouped-checkboxes";
import axios from "axios";

const ProductList = () => {

    const [products, setProducts] = useState([{}]);
    const [loading, setLoading] = useState(false);
    const [selectItem, setSelectItem] = useState([{}]);

    const onCheckboxChange = (checkboxes) => {
        checkboxes.map((item) => {
            if(item.checked == true){
                setSelectItem({...selectItem, item})
            }
        })
        // console.log(selectItem.length);
        // console.log(checkboxes);
    };

    useEffect(() => {
        getProduct();
    }, []);

    // console.log(products)
    const getProduct = async () => {
        setLoading(true);
        await axios
            .get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((error) => console.log(error));
        setLoading(false);
    };

    return (
        <CheckboxGroup onChange={onCheckboxChange}>
            <div className="mx-auto px-4 py-8 sm:px-8">
                <h2 className="mb-4 text-2xl font-semibold">Product List</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <thead className="bg-gray-300">
                            <tr className="text-left ">
                                <th className="p-3">
                                    <AllCheckerCheckbox />
                                </th>
                                <th className="p-3">Sl. No</th>
                                <th className="p-3">Image</th>
                                <th className="p-3 text-center">Title</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Dis. Price</th>
                                <th className="p-3">Ratings</th>
                                <th className="p-3">Seller</th>
                                <th className="p-3">Uploaded On</th>
                                <th className="p-3 text-center">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? <div className="text-center">Loading....</div> :
                                    (
                                        products.map((item, index) => (
                                            <tr key={index} className="border-b border-opacity-20 border-gray-900 bg-gray-50">
                                                <td className="p-3">
                                                    <Checkbox value={item} />
                                                </td>
                                                <td className="p-3">
                                                    <p>{item.id}</p>
                                                </td>
                                                <td className="p-3">
                                                    <img src={item.image} alt="img" className="w-auto h-10" />
                                                </td>
                                                <td className="p-3">
                                                    <p className="">{item.title}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>
                                                        <span className="font-extrabold">৳ </span>
                                                        {item.price}
                                                    </p>
                                                </td>
                                                <td className="p-3">
                                                    <p>
                                                        <span className="font-extrabold">৳ </span>
                                                        --
                                                    </p>
                                                </td>
                                                <td className="p-3">
                                                    {item.rating && item.rating.rate ? (
                                                        <p>{item.rating.rate}</p>
                                                    ) : (
                                                        <p>NA</p>
                                                    )}
                                                </td>
                                                <td className="p-3">
                                                    <p>BD Group </p>
                                                </td>
                                                <td className="p-3">
                                                    <p>01 Feb 2022 </p>
                                                </td>
                                                <td className="p-3">
                                                    <div className="flex flex-row justify-center space-x-3">
                                                        <button className="rounded bg-green-200 hover:bg-green-300 px-3 py-1 text-xs font-semibold text-green-900">
                                                            Edit
                                                        </button>
                                                        <button className="rounded bg-red-200 hover:bg-red-300 px-3 py-1 text-xs font-semibold text-red-900">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </CheckboxGroup>
    );
};

export default ProductList;
