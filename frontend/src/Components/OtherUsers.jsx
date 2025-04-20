// Components/OtherUsers.jsx
import React from 'react';
import OtherUser from './OtherUser';
import useGetOtherUsers from '../hooks/useGetOtherUsers.jsx';
import { useSelector } from 'react-redux';

const OtherUsers = () => {
  useGetOtherUsers();

  const { otherUsers } = useSelector((store) => store.user); // ✅ FIXED

  if (!otherUsers) return null;

  return (
    <div className='overflow-auto flex-1'>
      {
        otherUsers.map((user) => (
          <OtherUser key={user._id} user={user} />
        ))
      }
    </div>
  );
};

export default OtherUsers;