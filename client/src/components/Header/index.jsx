import React from 'react';
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
      
      <main >
      <Link to="/login" className="btn btn-secondary">Login</Link>
      <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
    </main>
      </div>
    </header>
  );
};

export default Header;
