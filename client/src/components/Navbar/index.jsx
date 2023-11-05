import React from 'react';

const Navbar = () => {
    return (
        <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/signup">Signup</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        </ul>
        </div>
    );
    };

export default Navbar;