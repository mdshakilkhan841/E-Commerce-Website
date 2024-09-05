import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

import {
  AllCheckerCheckbox,
  Checkbox,
  CheckboxGroup,
} from "@createnl/grouped-checkboxes";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  console.log("🚀 ~ ProductList ~ products:", products);
  const [loading, setLoading] = useState(false);
  const [selectItem, setSelectItem] = useState([{}]);
  const [checked, setChecked] = useState(false);

  const onCheckboxChange = (checkboxes) => {
    // setChecked(!checked)
    checkboxes.map((item) => {
      if (item.checked === true) {
        setSelectItem({ ...selectItem });
      }
    });
    console.log(selectItem);
    // console.log(checkboxes);
  };

  useEffect(() => {
    getProduct();
  }, []);

  // console.log(checked)

  //GET Products
  const getProduct = async () => {
    setLoading(true);
    await axios
      .get("https://dummyjson.com/products?limit=0")
      .then((res) => setProducts(res.data.products))
      .catch((error) => console.log(error));
    setLoading(false);
  };

  return (
    <CheckboxGroup onChange={onCheckboxChange}>
      <div className="mx-auto px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Product List</h2>
          </div>
          <div className="flex items-center justify-between">
            <div className="ml-10 space-x-8 lg:ml-40">
              <div className="sm:flex flex-row space-x-4">
                <button className="flex items-center gap-2 rounded-md bg-pink-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none hover:bg-pink-700">
                  <FaPlus />
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
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
                <th className="p-3 text-center">Brand</th>
                <th className="p-3">Price</th>
                <th className="p-3">Dis. Price</th>
                <th className="p-3">Ratings</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Uploaded At</th>
                <th className="p-3 text-center">Update</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td className="text-center">Loading....</td>
                </tr>
              ) : (
                products?.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-opacity-20 border-gray-900 bg-gray-50 ${
                      checked ? "bg-[#C3DBFF]" : ""
                    }`}
                  >
                    <td className="p-3">
                      <Checkbox value={item} />
                    </td>
                    <td className="p-3">
                      <p>{item.id}</p>
                    </td>
                    <td className="p-3">
                      <img
                        src={item.thumbnail}
                        alt="img"
                        className="w-auto h-10"
                      />
                    </td>
                    <td className="p-3">
                      <p className="">{item.title}</p>
                    </td>
                    <td className="p-3">
                      <p className="">{item.brand || "NA"}</p>
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
                        {item.discountPercentage}
                      </p>
                    </td>
                    <td className="p-3">
                      <p>{item.rating || "NA"}</p>
                    </td>
                    <td className="p-3">
                      <p>{item.stock}</p>
                    </td>
                    <td className="p-3">
                      <p>{item.meta.createdAt.split("T")[0]}</p>
                    </td>
                    <td className="p-3">
                      <div className="flex flex-row justify-center space-x-3">
                        <button
                          className="rounded bg-green-200 hover:bg-green-300 px-3 py-1 text-xs font-semibold text-green-900"
                          onClick={() => alert("Coming Soon ...")}
                        >
                          Edit
                        </button>
                        <button
                          className="rounded bg-red-200 hover:bg-red-300 px-3 py-1 text-xs font-semibold text-red-900"
                          onClick={() => alert("Coming Soon ...")}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </CheckboxGroup>
  );
};

export default ProductList;
