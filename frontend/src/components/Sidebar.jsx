import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import OtherUsers from './OtherUsers';
import { useDispatch, useSelector } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';
import toast from 'react-hot-toast';

const Sidebar = () => {
  const {otherUsers} =useSelector(store=>store.user);
  const dispatch = useDispatch();
  const [search,setSearch] = useState('');
  const searchSubmitHandler=(e)=>{
    e.preventDefault();
    const converSationuser = otherUsers?.find((user)=>user.fullName.toLowerCase().includes(search.toLowerCase()));
    if(converSationuser){
      dispatch(setOtherUsers([converSationuser]));
    }else{
     toast.error("User not found")
    }

   
  }
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col h-screen'>
      <form onSubmit={searchSubmitHandler} action="" className='flex items-center gap-2'>
        <input
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
          className='input input-bordered rounded-md'
          type="text"
          placeholder='Search...'
        />
        <button type='submit' className='btn bg-zinc-700 text-white'>
          <IoSearchSharp className='w-6 h-6 outline-none' />
        </button>
      </form>
      <div className="divider px-3"></div>
      <div className='flex-1 overflow-y-auto'>
        <OtherUsers />
      </div>
      
    </div>
  );
}

export default Sidebar;
