import React, { useState } from 'react'

// import moreAction from '../images/more-action.PNG'
import { useSelector } from 'react-redux';
import { API_BASE_URL } from '../../src/config'
import axios from 'axios';

const Postlist = (props) => {
    const user = useSelector(state => state.userReducer);
    const [commentBox, setCommentBox] = useState(false)
    const [comment, setComment] = useState("")

    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }
    const submitComment = async (postId) => {
        setCommentBox(false);
        const request = { "postId": postId, "commentText": comment };
        const response = await axios.put(`${API_BASE_URL}/comment`, request, CONFIG_OBJ);
        if (response.status === 200) {
            props.getAllPosts();
        }
    }
    // const likeDislikePost = async (postId, type) => {
    //     const request = { "postId": postId };
    //     const response = await axios.put(`${API_BASE_URL}/${type}`, request, CONFIG_OBJ);
    //     if (response.status === 200) {
    //         props.getAllPosts();
    //     }
    // }
       const username=props.postData.author.fullName.split(" ")[0];

  return (
    <div class="flex w-full p-4 bg-gray-700 rounded">
    <img className="flex-shrink-0 w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=" "></img>
    <div class="flex flex-col flex-grow lg:ml-1">
        <div class="flex justify-between">
            <div>
            <span class="font-semibold">{props.postData.author.fullName}</span>
            <span class="ml-1 text-gray-500 font-medium">@{username}</span>
            </div>
            <div>
            {props.postData.author._id == user.user._id ?
            <img onClick={() => props.deletePost(props.postData._id)} style={{ cursor: "pointer" }} src="https://cdn-icons-png.flaticon.com/512/1522/1522119.png" className="h-6 w-6 mr-2" alt=""></img>
            : ""}
            </div>
        </div>
        <span class=" text-sm text-gray-500">Just now</span>
        <p class="mt-1 text-gray-300">{props.postData.description}</p>
        <div class="flex items-center justify-center h-64 mt-2 bg-gray-700 rounded">
        <img style={{ borderRadius: '15px'}} className='h-64 ' alt={props.postData.description} src={props.postData.image} />
        </div>
        <div className="flex flex-wrap gap-2 justify-between text-center mt-2">
        <button className="bg-gray-700 text-gray-400 border border-gray-500 px-2 py-2 rounded-full flex flex-row"><img src="https://static.vecteezy.com/system/resources/thumbnails/018/874/691/small/valentine-s-heart-icon-free-png.png" className="h-6 w-6 mr-2" alt=""></img>Like</button>
        <button className="bg-gray-700 text-gray-400 border border-gray-500 px-2 py-2 rounded-full  flex flex-row"><img src="https://johnfergusonsmart.com/wp-content/uploads/2018/12/play-button-png-play-video-button-png-321.png" className="h-6 w-6 mr-2 " alt=""></img>Retweet</button>
        <button onClick={() => setCommentBox(true)} className="bg-gray-700 text-gray-400 border border-gray-500 px-2 py-2 rounded-full  flex flex-row"><img src="https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-31.png" className="h-6 w-6 mr-2" alt=""></img>Comment</button>
        <button className="bg-gray-700 text-gray-400 border border-gray-500 px-2 py-2 rounded-full  flex flex-row"><img src="https://cdn-icons-png.flaticon.com/512/243/243925.png" className="h-6 w-6 mr-2" alt=""></img></button>
      </div>
      {commentBox ? <div className='row mb-2'>
                        <div className='col-8'>
                            <textarea onChange={(e) => setComment(e.target.value)} className='bg-gray-800 text-gray-400'></textarea>
                        </div>
                        <div className='col-4'>
                            <button className='btn btn-primary' onClick={() => submitComment(props.postData._id)}>Submit</button>
                        </div>
                    </div> : ""}
                    {props.postData.comments.map((comment) => {
                        return (<div className='row'>
                            <div className='flex justify-between'>
                                <p className='text-gray-400'>{comment.commentText}</p> <span className='text-blue-500'>- {comment.commentedBy.fullName}</span>
                            </div>
                        </div>)
                    })}
    </div>
</div>
  )
}

export default Postlist