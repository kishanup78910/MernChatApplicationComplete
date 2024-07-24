import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../redux/messageSlice'; // Import addMessage action

const SendInput = () => {
  const [message, setMessage] = useState(""); 
  const dispatch = useDispatch();
  const { selectedUser } = useSelector(store => store.user);
  const { messages } = useSelector(store => store.message);

  const onSubmitHandler = async (e) => {
    e.preventDefault(); 

    console.log('Submitting message:', message);
    console.log('Selected user ID:', selectedUser?._id);

    try { 
      const res = await axios.post(
        `http://localhost:5000/api/v1/message/send/${selectedUser?._id}`,
        { message },
        { withCredentials: true }
      );

      console.log('API response:', res.data);

      dispatch(addMessage(res.data.newMessage)); // Dispatch the new message
      setMessage(""); // Clear the input after sending the message
     
    } catch (err) {
      console.log('Error sending message:', err);
    }
  }

  return (
    <form className='px-4 my-3' onSubmit={onSubmitHandler}>
      <div className='w-full relative'>
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder='Send a Message...' 
          className='border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white' 
        />
        <button type='submit' className='absolute flex inset-y-0 right-0 items-center pr-4'>
          <IoSend />
        </button>
      </div>
    </form>
  );
}

export default SendInput;
