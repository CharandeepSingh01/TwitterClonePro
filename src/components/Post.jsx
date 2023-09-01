import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { API_BASE_URL } from '../../src/config'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Post = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState({ preview: '', data: '' })
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const CONFIG_OBJ = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  }

  const cancelButtonRef = useRef(null);
  const navigate = useNavigate();
  const handleFileSelect = (event) => {
    const img = {
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0]
    }
    setImage(img);
  }
  const settingTime = () => {
    const currentDate = new Date();
    const time= currentDate.toLocaleString();
    setLocation(time);
  }


  const handleImgUpload = async () => {
    let formData = new FormData();
    formData.append('file', image.data);

    const response = axios.post(`${API_BASE_URL}/uploadFile`, formData)
    return response;
  }
  const addPost = async () => {

    if (image.preview === '') {
      Swal.fire({
        icon: 'error',
        title: 'Post image is mandatory!'
      })
    } else
     if (caption === '') {
      Swal.fire({
        icon: 'error',
        title: 'Post description is mandatory!'
      })
    } else if (location === '') {
      Swal.fire({
        icon: 'error',
        title: 'Date is mandatory!'
      })
    } else {
      setLoading(true);
      const imgRes = await handleImgUpload();
      const request = { description: caption, date: location, image: `${API_BASE_URL}/files/${imgRes.data.fileName}` }
      const postResponse = await axios.post(`${API_BASE_URL}/createpost`, request, CONFIG_OBJ)
      setLoading(false);
      if (postResponse.status == 204 || postResponse.status == 201) {
        navigate("/")
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Some error occurred while creating post'
        })
      }
      
  }}
  


  return (<>
    <div onClick={()=> {setOpen(true); settingTime()}} className="bg-gray-700 rounded-lg p-4 mb-4 shadow-md">
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
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div
          className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block
         sm:p-0"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-40 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom bg-white rounded-lg
               text-left 
            overflow-hidden shadow-xl 
            transform transition-all 
            sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <form>
              <div className="mb-4 mx-6">
                <h1 className='font-bold mt-8 mb-4 text-2xl'>Create New Post</h1>
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileSelect}
            className="w-full py-2 px-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4 mx-6">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Post Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            onChange={(ev) => setCaption(ev.target.value)}
            className="w-full py-2 px-3 border border-gray-300 rounded-lg resize-none"
          />
        </div>
        <div className="mb-4 mx-6">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Time
          </label>
          <input
            id="date"
            name="date"
            rows="4"
            value={location}
            className="w-full py-2 px-3 border border-gray-300 rounded-lg resize-none"
          />
        </div>
      
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md
                   border border-transparent shadow-sm px-6 py-2 bg-blue-600
                    text-base font-medium text-white hover:bg-blue-700 
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                     focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => { addPost(); setOpen(false)}}
                >
                  Post
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center
                  rounded-md border border-gray-300 shadow-sm px-4 py-2
                   bg-white text-base font-medium text-gray-700
                    hover:bg-gray-50 focus:outline-none focus:ring-2
                     focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0
                      sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div></form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  );
};

export default Post
