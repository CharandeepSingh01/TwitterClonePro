import React from 'react'

const Widget = () => {
  return (
    <>
          <div className="bg-gray-700 rounded-lg p-4">
            <h2 className="text-blue-700 text-lg font-semibold mb-4 pl-2">Features Added</h2>
            <ul className="pl-6 list-disc text-sm text-gray-300 py-2">
              <li className=''>Login / Logout using JWT</li>
              <li>Registration</li>
              <li>Tweet create and delete</li>
              <li>Fully Responsive</li>
            </ul>
            <h3 className="text-gray-300 text-sm font-semibold mb-4 pl-2">NOTE: Please be patient as the request and the corresponding response, which will appear in the frontend, may take a few seconds longer than usual.</h3>
          </div>
        </>
  )
}

export default Widget