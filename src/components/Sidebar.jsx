import React from 'react'


const Sidebar = () => {
  return (<>
          <div className="bg-blue-800 rounded-t-lg p-4 text-center h-28">
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/918/745/original/rgb-color-wheel-spectrum-selector-picker-rgb-palette-logo-color-rainbow-diagram-circle-free-vector.jpg"
              alt="User Profile"
              className="w-24 h-24 rounded-full mx-auto mt-12"
            />
          </div>
          <div className="bg-gray-700 rounded-b-lg p-4 pt-16 text-center">
            <h2 className="text-lg font-semibold">User Name</h2>
            <p className="text-gray-400">@userhandle</p>
            <hr className="my-4 border-t-2 border-gray-600" />
            <div className="flex justify-around">
              <div>
                <p className="text-gray-400">Followers</p>
                <p className="font-semibold">100</p>
              </div>
              <div>
                <p className="text-gray-400">Following</p>
                <p className="font-semibold">50</p>
              </div>
            </div>
            <hr className="my-4 border-t-2 border-gray-600" />
            <div className="flex justify-around">
              <h6 className='text-blue-700'>Find new people</h6>
              </div>
          </div>
        </>
  )
}

export default Sidebar