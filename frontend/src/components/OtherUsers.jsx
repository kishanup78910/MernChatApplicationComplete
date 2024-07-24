import React from 'react';
import useGetOtherUser from '../hooks/useGetOtherUser';
import { useSelector } from 'react-redux';
import OtherUser from './OtherUser';

const OtherUsers = () => {
  useGetOtherUser(); // Call the custom hook to fetch other users

  const { otherUsers } = useSelector(store => store.user); // Get the other users from Redux state

  if (!otherUsers || otherUsers.length === 0) {
    return <div>No users found</div>;
  }

  return (
    <div>
      {otherUsers.map((user) => (
        <OtherUser key={user?._id} user={user} />
      ))}
    </div>
  );
};

export default OtherUsers;
