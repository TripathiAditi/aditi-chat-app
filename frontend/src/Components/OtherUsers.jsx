import React from 'react';
import OtherUser from './OtherUser';
import useGetOtherUsers from '../hooks/useGetOtherUsers.jsx';
import { useSelector } from 'react-redux';

const OtherUsers = () => {
  useGetOtherUsers();

  const { otherUsers } = useSelector((store) => store.user);

  // ✅ Ensure otherUsers is an array before mapping
  if (!Array.isArray(otherUsers)) {
    console.warn("Expected 'otherUsers' to be an array but got:", otherUsers);
    return <div>No users to show.</div>;
  }

  return (
    <div className='overflow-auto flex-1'>
      {otherUsers.map((user) => (
        <OtherUser key={user._id} user={user} />
      ))}
    </div>
  );
};

export default OtherUsers;