import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_SINGLE_USER } from '../../utils/queries';

const Profile = () => {
  // Use `useParams()` to retrieve value of the route parameter `:userId`
  const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    // pass URL parameter
    variables: { userId: userId },
  });

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="card-header">
        {user.name}
      </h2>
    </div>
  );
};

export default Profile;
