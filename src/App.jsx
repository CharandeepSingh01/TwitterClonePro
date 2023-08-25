import React from 'react';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import Post from './components/Post';


const TwitterClone = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://www.freeiconspng.com/thumbs/logo-twitter-png/blue-logo-twitter-birds-emblem-3.png"
            alt="Twitter Logo"
            className="lg:ml-8 w-10 h-8 mr-2"
          />
         <div class="flex items-center">
  <input
    type="text"
    placeholder="#     Explore"
    class="bg-gray-700 text-white px-2 py-1 rounded focus:outline-none w-full sm:w-auto"
  />
</div>
        </div>
        <div className="bg-gray-700 flex items-center space-x-4 rounded-full lg:mr-8 ml-1">
          

        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-gray-400 bg-gray-700 hover:bg-blue-800  focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center" type="button"><img src="https://static.thenounproject.com/png/5034901-200.png" alt=" " className='h-6 w-6 mr-2'></img>User Profile<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>



        </div>
      </nav>

      <div className="flex flex-col md:flex-row bg-gray-800 text-white lg:pl-20 lg:pr-20">
        
        <div className="bg-gray-800 p-4 flex-none md:w-1/4">
        <Sidebar />
        </div>

        {/* Feed */}
        <div className="bg-gray-800 p-4 flex-grow">
          <Post />
        </div>

        {/* Widgets */}
        {/* <div className="bg-gray-800 p-4 flex-none md:w-1/4">
          
          <div className="bg-gray-700 rounded-lg p-4">
            <h2 className="text-blue-700 text-lg font-semibold mb-4 pl-2">Features Added</h2>
            <ul className="pl-6 list-disc text-sm text-gray-300 py-2">
              <li className=''>Login / Logout using JWT</li>
              <li>Registration</li>
              <li>Tweet create edit delete</li>
              <li>Fully Responsive</li>
            </ul>
          </div>
        </div> */}
        <div className="bg-gray-800 p-4 flex-none md:w-1/4">
        <Widget />
        </div>
      </div>
    </div>
  );
};

export default TwitterClone;
