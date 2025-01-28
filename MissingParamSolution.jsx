import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId, profileId } = useParams();

  // Solution: Use optional chaining and handle potential errors
  const userIdNumber = parseInt(userId, 10);
  const profileIdNumber = profileId ? parseInt(profileId, 10) : null; 

  if (isNaN(userIdNumber)) {
    return <p>Invalid User ID</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userIdNumber}</p>
      {profileIdNumber ? <p>Profile ID: {profileIdNumber}</p> : <p>Profile ID not found</p>}
    </div>
  );
};

export default UserProfile;