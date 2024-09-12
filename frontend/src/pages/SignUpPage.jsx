import React from "react";
import Header from "../components/Header";
const SignUpPage = () => {
    return (
        <>
        <Header />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white">
                {/* Whole Display */}
                <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
                    {/* Left Login Side */}
                    <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full md:w-1/3">
                        <h2 className="text-4xl mb-6 flex justify-center font-bold font-serif">Sign Up</h2>
                        <div className="flex space-x-4 mb-4">
                            <div className="flex-1">
                                <label className="block text-sm font-semibold mb-2 ml-2" htmlFor="First Name">First Name</label>

                                <input className="w-full px-3 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    type="text" placeholder="First Name" />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-semibold mb-2 ml-2" htmlFor="Last Name">Last Name</label>

                                <input className="w-full px-3 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="mb-4">

                            <label className="block text-sm font-semibold mb-2 ml-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="w-full px-3 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                type="text"
                                id="username"
                                placeholder="Username"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2 ml-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                type="email"
                                id="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2 ml-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                type="password"
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg shadow-md transition duration-200">
                            Sign Up
                        </button>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-purple-300 mb-2">
                                Already have an account?
                            </p>
                            <a href="/signin" className="text-sm text-purple-300 hover:text-white font-semibold transition duration-200">
                                Sign In
                            </a>
                        </div>
                    </div>
                    {/* Welcome Side */}
                    <div className="text-center md:text-right mt-12 md:mt-0 md:ml-12 ">
                        <h1 className="text-5xl md:text-7xl font-bold ">Welcome</h1>
                        <p className="mt-4 text-lg max-w-md mx-auto md:mx-0">
                            Welcome to our StormMart. Please sign up to continue
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUpPage;