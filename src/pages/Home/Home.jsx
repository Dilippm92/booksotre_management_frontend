import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
 
  const userData = useSelector((state) => state.user); 

  return (
    <div>
      <h1>Home</h1>
      {userData && (
        <div>
          <p>Username: {userData.username}</p>
          <p>Token: {userData.token}</p>
        
        </div>
      )}
    </div>
  );
};

export default Home;

