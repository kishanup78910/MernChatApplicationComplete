import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import { IoSearchSharp } from "react-icons/io5";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate();
  const logOutHandler=async()=>{
    try{
     const res = await axios.get(`http://localhost:5000/api/v1/user/logout`);
     toast.success(res.data.message);
 navigate('/login')
    }catch(err){

    }
  }
  return (
<div className="flex flex:sm:h-[450px] md:h-[550px] lg:h-[550px]  rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
     <Sidebar/>
     <MessageContainer/>
     <div className='mt-2'>
        <button onClick={logOutHandler} className='btn btn-sm'>Logout</button>
      </div>
</div>
    

  )
}

export default HomePage
