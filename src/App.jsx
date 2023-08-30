import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import Post from './components/Post';
import Postlist from './components/Postlist';
import { API_BASE_URL } from './config'
import axios from 'axios';
import Swal from 'sweetalert2'
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const TwitterClone = () => {
  const user = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "LOGIN_ERROR" });
    navigate("/login");
  }

  const [allposts, setAllposts] = useState([]);

    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }

    const getAllPosts = async () => {
        const response = await axios.get(`${API_BASE_URL}/allposts`);

        if (response.status === 200) {
            setAllposts(response.data.posts);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Some error occurred while getting all posts'
            })
        }
    }

    const deletePost = async (postId) => {
        const response = await axios.delete(`${API_BASE_URL}/deletepost/${postId}`, CONFIG_OBJ);
        if (response.status === 200) {
            getAllPosts();
        }
    }

    useEffect(() => {
        getAllPosts();
    }, []);



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
          

        <button onClick={() => logout()} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-gray-300 bg-gray-700 hover:bg-blue-800  focus:outline-none font-bold rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center" type="button"><img src="https://static.thenounproject.com/png/5034901-200.png" alt=" " className='h-6 w-6 mr-2'></img>{user.user.fullName}<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>



        </div>
      </nav>

      <div className="flex flex-col md:flex-row bg-gray-800 text-white lg:pl-20 lg:pr-20">
        
        <div className="bg-gray-800 p-4 flex-none md:w-1/4">
        <Sidebar user={user}/>
        </div>

        {/* Feed */}
        <div className="bg-gray-800 p-4 flex-grow">
          <Post />
          {allposts.map((post) => {
                    return (
                        <div className='mb-2' key={post._id}>
          <Postlist postData={post} deletePost={deletePost} getAllPosts={getAllPosts} />
          </div>
                    )
                })
                }
        </div>

        <div className="bg-gray-800 p-4 flex-none md:w-1/4">
        <Widget />
        </div>
      </div>
    </div>
  );
};

export default TwitterClone;
