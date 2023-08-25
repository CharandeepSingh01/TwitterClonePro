import React from 'react';

const Post = () => {
  return (
    <div className="bg-gray-700 rounded-lg p-4 mb-4 shadow-md">
        <div className="flex justify-between items-center">
      <input
        type="text"
        placeholder="Create New Post"
        className="w-full bg-gray-600 border border-blue-800 rounded p-2 mb-2 mr-2"
      />
      <button className="bg-gray-700 text-gray-300 font-weight-400 px-4 py-2 rounded mb-2">Post</button></div>
      <div className="flex flex-wrap gap-2 justify-around text-center">
        <button className="bg-gray-700 text-gray-400 border border-gray-500 px-6 py-2 rounded-full flex flex-row"><img src="https://icones.pro/wp-content/uploads/2021/06/icone-d-image-vert.png" className="h-6 w-6 mr-2" alt=""></img>Photo</button>
        <button className="bg-gray-700 text-gray-400 border border-gray-500 px-6 py-2 rounded-full  flex flex-row"><img src="https://johnfergusonsmart.com/wp-content/uploads/2018/12/play-button-png-play-video-button-png-321.png" className="h-6 w-6 mr-2 " alt=""></img>Video</button>
        <button className="bg-gray-700 text-gray-400 border border-gray-500 px-2 py-2 rounded-full  flex flex-row"><img src="https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-31.png" className="h-6 w-6 mr-2" alt=""></img>Attachment</button>
        <button className="bg-gray-700 text-gray-400 border border-gray-500 px-4 py-2 rounded-full  flex flex-row"><img src="https://cdn-icons-png.flaticon.com/512/243/243925.png" className="h-6 w-6 mr-2" alt=""></img>Schedule</button>
      </div>
    </div>
  );
};

export default Post;
