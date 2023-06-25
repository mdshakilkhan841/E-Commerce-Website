import React from "react";
import BD from "../assets/bd-flag.png"

const SignUp = () => {
    return (
        <div>
            <div class="mt-16 py-16">
                <form class="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-gray-100 p-6 shadow lg:p-10">
                    <h1 class="mb-6 text-xl font-semibold lg:text-2xl">Create Account</h1>

                    <div class="grid gap-3 md:grid-cols-2">
                        <div>
                            <label class=""> First Name <span className="text-red-600 font-bold">*</span> </label>
                            <input
                                type="text"
                                placeholder="Your Name" required
                                class="mt-2 h-10 w-full rounded border focus:ring-2  focus:ring-pink-300 text-base outline-none border-gray-300 bg-white px-3"
                            />
                        </div>
                        <div>
                            <label class=""> Last Name </label>
                            <input
                                type="text"
                                placeholder="Last  Name"
                                class="mt-2 h-10 w-full rounded border focus:ring-2  focus:ring-pink-300 text-base outline-none border-gray-300 bg-white px-3"
                            />
                        </div>
                    </div>

                    <div class="grid gap-3 md:grid-cols-2">
                        <div>
                            <label class=""> Gender <span className="text-red-600 font-bold">*</span> </label>
                            <select required={true} class="mt-2 h-10 w-full rounded border focus:ring-2  focus:ring-pink-300 text-base outline-none border-gray-300 bg-white py-2 px-3">
                                <option value="" defaultValue>
                                    Select
                                </option>
                                <option value="Commute">Male</option>
                                <option value="Eat Outs">Female</option>
                                <option value="Gardening">Other</option>

                            </select>
                        </div>
                        <div>
                            <label class=""> Phone Number <span className="text-red-600 font-bold">*</span> </label>
                            <div className="flex items-center border border-gray-300 rounded mt-2">

                                <img src={BD} alt="Bangladesh Flag" className="w-6 h-auto ml-2 mr-2" />
                                <span className='pr-1.5'>+880</span>
                                <input
                                    type="tel" pattern="[0-9]{10}" required
                                    placeholder="XXX XXX XXXX"
                                    class="h-10 w-full rounded-r border-l focus:ring-2  focus:ring-pink-300 text-base outline-none border-gray-300 bg-white px-3"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class=""> New Password <span className="text-red-600 font-bold">*</span> </label>
                        <input
                            type="password"
                            placeholder="********"
                            class="mt-2 h-10 w-full rounded border focus:ring-2  focus:ring-pink-300 text-base outline-none border-gray-300 bg-white px-3"
                        />
                    </div>

                    <div class="space-x-2">
                        <input type="checkbox" checked={true} />
                        <label for="checkbox1">
                            I agree to the{" "}
                            <a href="#" class="text-blue-600">
                                Terms and Conditions
                            </a>
                        </label>
                    </div>

                    <div>
                        <button
                            type="submit"
                            class="mt-5 w-full rounded-md bg-pink-400 hover:bg-pink-500  p-2 text-center font-semibold text-white"
                        >
                            Get Started
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
