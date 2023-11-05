import React from 'react';
import { Link } from 'react-router-dom';

import Concrete from '../../assets/images/Concrete.png';

const Home = () => {
  return (
    <main style={{
      backgroundImage: `url(${Concrete})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <Link to="/login" className="btn btn-secondary">Login</Link>
      <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
    </main>
  );
};

export default Home;
