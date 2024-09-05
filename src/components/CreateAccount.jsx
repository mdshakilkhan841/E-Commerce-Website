import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import BD from "../assets/bd-flag.png";

const CreateAccount = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        mobile: "880",
        password: "",
        createDate: new Date().toLocaleDateString(),
    })

    console.log(userData);

    // Update the mobile field with user's target value
    const handleMobileChange = (e) => {
        const targetValue = e.target.value.slice(0, 10); // Limit input to first ten characters
        setUserData((prevUserData) => ({ ...prevUserData, mobile: "880" + targetValue }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let response = await axios.post("http://localhost:3000/users", userData);
        if (!response ||!response.data){
            alert('Something went wrong')
        } else{
            alert("Successfully Added User !!")
        }

        setUserData({
            firstName: "",
            lastName: "",
            gender: "",
            mobile: "",
            password: ""
        })

        navigate("/login");
    }


    return (
        <div>
            <div className="mt-16 py-16">
                <form className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-gray-100 p-6 shadow lg:p-10"
                    onSubmit={handleSubmit}
                >
                    <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Create Account</h1>

                    <div className="grid gap-3 md:grid-cols-2">
                        <div>
                            <label className=""> First Name <span className="text-red-600 font-bold">*</span> </label>
                            <input
                                type="text"
                                placeholder="First Name" required
                                className="mt-2 h-10 w-full rounded border focus:ring-2  focus:ring-pink-300 text-base outline-none border-gray-300 bg-white px-3"
                                value={userData.firstName}
                                onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className=""> Last Name </label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="mt-2 h-10 w-full rounded border focus:ring-2  focus:ring-pink-300 text-base outline-none border-gray-300 bg-white px-3"
                                value={userData.lastName}
                                onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                        <div>
                            <label className=""> Gender <span className="text-red-600 font-bold">*</span> </label>
                            <select required={true} className="mt-2 h-10 w-full rounded border focus:ring-2  focus:ring-pink-300 text-base outline-none border-gray-300 bg-white py-2 px-3"
                                value={userData.gender}
                                onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                            >
                                <option value="" defaultValue>
                                    Select
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>

                            </select>
                        </div>
                        <div>
                            <label className=""> Phone Number <span className="text-red-600 font-bold">*</span> </label>
                            <div className="flex items-center border border-gray-300 rounded mt-2">

                                <img src={BD} alt="Bangladesh Flag" className="w-6 h-auto ml-2 mr-2" />
                                <span className='pr-1.5'>+880</span>
                                <input
                                    type="tel" pattern="[0-9]{10}" required
                                    placeholder="XXX XXX XXXX"
                                    className="h-10 w-full rounded-r border-l focus:ring-2  focus:ring-pink-300 text-base outline-none border-gray-300 bg-white px-3"
                                    value={userData.mobile.slice(3)} // Exclude the '880' prefix htmlFor display
                                    onChange={handleMobileChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className=""> New Password <span className="text-red-600 font-bold">*</span> </label>
                        <input
                            type="password"
                            required
                            placeholder="********"
                            className="mt-2 h-10 w-full rounded border focus:ring-2  focus:ring-pink-300 text-base outline-none border-gray-300 bg-white px-3"
                            value={userData.password}
                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                        />
                    </div>

                    <div className="space-x-2">
                        <input type="checkbox" defaultChecked />
                        <label htmlFor="checkbox1">
                            I agree to the{" "}
                            <a href="#" className="text-blue-600">
                                Terms and Conditions
                            </a>
                        </label>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="mt-5 w-full rounded-md bg-pink-400 hover:bg-pink-500  p-2 text-center font-semibold text-white"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
