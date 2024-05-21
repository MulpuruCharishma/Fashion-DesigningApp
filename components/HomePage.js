// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import kids from './Images/kids.jpg';
import women from './Images/women.jpg';
import men from './Images/men.jpg';
import './files/Home.css';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to Our Fashion Designing System</h1>
      <p>Explore our latest collections and discover unique designs!</p>
      
      <div>
        <h2>Shop by Category</h2>
        <ul className="category-list">
          <li className="category-item">
            <Link to="/products/">
              <img src={women} alt="Women's Fashion" className="category-image" />
              Women
            </Link>
          </li>
          <li className="category-item">
            <Link to="/products">
              <img src={men} alt="Men's Fashion" className="category-image" />
              Men
            </Link>
          </li>
          <li className="category-item">
            <Link to="/products">
              <img src={kids} alt="Kids' Fashion" className="category-image" />
              Kids
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
