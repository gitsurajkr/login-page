import React from 'react';
import { Link } from 'react-router-dom'; 
import Button from './Button';
import { useRecoilState } from 'recoil';
import { isSignedInState, isSignedUpState } from '../state/state'; // Correct import path

const Header = () => {
  // Use Recoil hooks inside the component
  const [isSignedIn, setIsSignedIn] = useRecoilState(isSignedInState);
  const [isSignedUp, setIsSignedUp] = useRecoilState(isSignedUpState);

  return (
    <div className="py-3 bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white sticky top-0 font-semibold font-serif">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold pl-6">StormMart</Link>
          {/* <img src={img} alt="Logo" className='h-5 w-5' /> */}
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="mr-2 bg-white bg-opacity-20 border border-gray-300 text-white font-sans rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Search
          </button>
        </div>

        <div className="flex items-center space-x-3 px-5">
          <Link to="/" className="px-3 hover:underline">Home</Link>
          <Link to="/about" className="px-3 hover:underline">About</Link>
          <Link to="/contact" className="px-3 hover:underline">Contact</Link>
          <Link to="/signup">
            <Button onClick={() => setIsSignedUp(true)} label="Sign Up" />
          </Link>
          <Link to="/signin">
            <Button onClick={() => setIsSignedIn(true)} label="Sign In" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
