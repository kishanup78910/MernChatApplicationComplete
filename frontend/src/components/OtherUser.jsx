import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user); // Correctly reference store.user

  const selectUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };

  return (
    <div>
      <div onClick={() => selectUserHandler(user)} className={`${selectedUser?._id === user?._id ?'bg-zinc-200':''} flex gap-2 items-center hover:bg-zinc-100 rounded-sm p-2 cursor-pointer`}>
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img src={user.profilePhoto} alt="profile" />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-2 justify-between items-center flex-1'>
            <p>{user.fullName}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-3 h-1"></div>
    </div>
  );
};

export default OtherUser;
