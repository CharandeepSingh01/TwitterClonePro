import React from 'react'

const Postlist = () => {
  return (
    <div class="flex w-full p-4 bg-gray-700 rounded">
    <span class="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
    <div class="flex flex-col flex-grow lg:ml-1">
        <div class="flex">
            <span class="font-semibold">Username</span>
            <span class="ml-1">@username</span>
            
        </div>
        <span class=" text-sm">Just now</span>
        <p class="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a class="underline" href="#">#hashtag</a></p>
        <div class="flex items-center justify-center h-64 mt-2 bg-gray-400 rounded">
            <span class="font-semibold text-gray-500 rounded">Image</span>
        </div>
        <div className="flex flex-wrap gap-2 justify-between text-center mt-2">
        <button className="bg-gray-700 text-gray-400 border border-gray-500 px-2 py-2 rounded-full flex flex-row"><img src="https://icones.pro/wp-content/uploads/2021/06/icone-d-image-vert.png" className="h-6 w-6 mr-2" alt=""></img>Like</button>
        <button className="bg-gray-700 text-gray-400 border border-gray-500 px-2 py-2 rounded-full  flex flex-row"><img src="https://johnfergusonsmart.com/wp-content/uploads/2018/12/play-button-png-play-video-button-png-321.png" className="h-6 w-6 mr-2 " alt=""></img>Retweet</button>
        <button className="bg-gray-700 text-gray-400 border border-gray-500 px-2 py-2 rounded-full  flex flex-row"><img src="https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-31.png" className="h-6 w-6 mr-2" alt=""></img>Comment</button>
        <button className="bg-gray-700 text-gray-400 border border-gray-500 px-2 py-2 rounded-full  flex flex-row"><img src="https://cdn-icons-png.flaticon.com/512/243/243925.png" className="h-6 w-6 mr-2" alt=""></img></button>
      </div>
    </div>
</div>
  )
}

export default Postlist