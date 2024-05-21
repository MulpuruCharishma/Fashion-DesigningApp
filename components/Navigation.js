import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Images/kids.jpg'; // Import your Logo component

const Navigation = ({ cartItems }) => {
  return (
    <nav>
      <Logo /> {/* Display the Logo component */}
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
