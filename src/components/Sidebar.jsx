import React from 'react'



const Sidebar = (props) => {
    

  return (<>
          <div className="bg-blue-800 rounded-t-lg p-4 text-center h-28">
            <img
              src="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="User Profile"
              className="w-24 h-24 rounded-full mx-auto mt-12"
            />
          </div>
          <div className="bg-gray-700 rounded-b-lg p-4 pt-16 text-center">
            <h2 className="text-lg font-semibold">{props.user.user.fullName}</h2>
            <p className="text-gray-400 flex flex-col">@{props.user.user.fullName}</p>
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