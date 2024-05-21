import React, { useState } from 'react'; 
import './files/Product.css';
import { useNavigate } from 'react-router-dom';
import p1 from './Images/p1.jpg'; 
import p2 from './Images/p2.jpg'; 
import p3 from './Images/p3.jpg'; 
import p4 from './Images/p4.jpg';
import p5 from './Images/p5.jpg';
import p6 from './Images/p6.jpg';
import p7 from './Images/p7.jpg';
import p8 from './Images/p8.jpg';
import p9 from './Images/p9.jpg';
import p10 from './Images/p10.jpg';
import p11 from './Images/p11.jpg';
import p12 from './Images/p12.jpg';
import p13 from './Images/p13.jpg';
import p14 from './Images/p14.jpg';
import p15 from './Images/p15.jpg';
import p16 from './Images/p16.jpg';
import p17 from './Images/p17.jpg';
import p18 from './Images/p18.jpg';
import p19 from './Images/p19.jpg';
import p20 from './Images/p20.jpg';
import p21 from './Images/p21.jpg';
import p22 from './Images/p22.jpg';
import p23 from './Images/p23.jpg';
import p24 from './Images/p24.jpg';
import p25 from './Images/p25.jpg';
import p26 from './Images/p26.jpg';
import p27 from './Images/p27.jpg';
import p28 from './Images/p28.jpg';
import p29 from './Images/p29.jpg';
import p30 from './Images/p30.jpg';
import p31 from './Images/p31.jpg';
import p32 from './Images/p32.jpg';
import p33 from './Images/p33.jpg';
import p34 from './Images/p34.jpg';
import p35 from './Images/p35.jpg';
import p36 from './Images/p36.jpg';
import p37 from './Images/p37.jpg';
import p38 from './Images/p38.jpg';
import p39 from './Images/p39.jpg';
import p40 from './Images/p40.jpg';
import p41 from './Images/p41.jpg';
import p42 from './Images/p42.jpg';
import p43 from './Images/p43.jpg';
import p44 from './Images/p44.jpg';
import p45 from './Images/p45.jpg';
import p46 from './Images/p46.jpg';
import p47 from './Images/p47.jpg';
import p48 from './Images/p48.jpg';
import p49 from './Images/p49.jpg';
import p50 from './Images/p50.jpg';

const Products = ({ addToCart }) => {
  const navigate = useNavigate();

  const handleBuyNow = (productId) => {
    navigate('/checkout', { state: { productId } });
  };
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000); // Set max price according to your needs
  const [genderFilter, setGenderFilter] = useState(null);
  const [showFilteredProducts, setShowFilteredProducts] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const productsData = [
    { id: 1, name: 'Product 1', price: '₹999/-', image: p1, category: 'women' },
    { id: 2, name: 'Product 2', price: '₹1200/-', image: p2, category: 'women' },
    { id: 3, name: 'Product 3', price: '₹1499/-', image: p3, category: 'women' },
    { id: 4, name: 'Product 4', price: '₹1299/-', image: p4, category: 'women' },
    { id: 5, name: 'Product 5', price: '₹1499/-', image: p5, category: 'women' },
    { id: 6, name: 'Product 6', price: '₹1999/-', image: p6, category: 'women' },
    { id: 7, name: 'Product 7', price: '₹1500/-', image: p7, category: 'women' },
    { id: 8, name: 'Product 8', price: '₹2500/-', image: p8, category: 'women' },
    { id: 9, name: 'Product 9', price: '₹2600/-', image: p9, category: 'women' },
    { id: 10, name: 'Product 10', price: '₹4000/-', image: p10, category: 'kids' },
    { id: 11, name: 'Product 11', price: '₹1600/-', image: p11, category: 'women' },
    { id: 12, name: 'Product 12', price: '₹2000/-', image: p12, category: 'kids' },
    { id: 13, name: 'Product 13', price: '₹1000/-', image: p13, category: 'kids' },
    { id: 14, name: 'Product 14', price: '₹2000/-', image: p14, category: 'kids' },
    { id: 15, name: 'Product 15', price: '₹1500/-', image: p15, category: 'kids' },
    { id: 16, name: 'Product 16', price: '₹1000/-', image: p16, category: 'kids' },
    { id: 17, name: 'Product 17', price: '₹2000/-', image: p17, category: 'kids' },
    { id: 18, name: 'Product 18', price: '₹3000/-', image: p18, category: 'kids' },
    { id: 19, name: 'Product 19', price: '₹2500/-', image: p19, category: 'kids' },
    { id: 20, name: 'Product 20', price: '₹2000/-', image: p20, category: 'kids' },
    { id: 21, name: 'Product 21', price: '₹1500/-', image: p21, category: 'kids' },
    { id: 22, name: 'Product 22', price: '₹2000/-', image: p22, category: 'kids' },
    { id: 23, name: 'Product 23', price: '₹5000/-', image: p23, category: 'men' },
    { id: 24, name: 'Product 24', price: '₹10000/-', image: p24, category: 'men' },
    { id: 25, name: 'Product 25', price: '₹10000/-', image: p25, category: 'men' },
    { id: 26, name: 'Product 26', price: '₹8000/-', image: p26, category: 'men' },
    { id: 27, name: 'Product 27', price: '₹1500/-', image: p27, category: 'men' },
    { id: 28, name: 'Product 28', price: '₹1000/-', image: p28, category: 'men' },
    { id: 29, name: 'Product 29', price: '₹2000/-', image: p29, category: 'men' },
    { id: 30, name: 'Product 30', price: '₹1999/-', image: p30, category: 'men' },
    { id: 31, name: 'Product 31', price: '₹999/-', image: p31, category: 'men' },
    { id: 32, name: 'Product 32', price: '₹899/-', image: p32, category: 'men' },
    { id: 33, name: 'Product 33', price: '₹599/-', image: p33, category: 'kids' },
    { id: 34, name: 'Product 34', price: '₹699/-', image: p34, category: 'kids' },
    { id: 35, name: 'Product 35', price: '₹799/-', image: p35, category: 'kids' },
    { id: 36, name: 'Product 36', price: '₹499/-', image: p36, category: 'kids' },
    { id: 37, name: 'Product 37', price: '₹699/-', image: p37, category: 'kids' },
    { id: 38, name: 'Product 38', price: '₹399/-', image: p38, category: 'kids' },
    { id: 39, name: 'Product 39', price: '₹299/-', image: p39, category: 'kids' },
    { id: 40, name: 'Product 40', price: '₹499/-', image: p40, category: 'kids' },
    { id: 41, name: 'Product 41', price: '₹1999/-', image: p41, category: 'kids' },
    { id: 42, name: 'Product 42', price: '₹999/-', image: p42, category: 'kids' },
    { id: 43, name: 'Product 43', price: '₹399/-', image: p43, category: 'kids' },
    { id: 44, name: 'Product 44', price: '₹400/-', image: p44, category: 'kids' },
    { id: 45, name: 'Product 45', price: '₹499/-', image: p45, category: 'kids' },
    { id: 46, name: 'Product 46', price: '₹1300/-', image: p46, category: 'kids' },
    { id: 47, name: 'Product 47', price: '₹15000/-', image: p47, category: 'women' },
    { id: 48, name: 'Product 48', price: '₹20000/-', image: p48, category: 'women' },
    { id: 49, name: 'Product 49', price: '₹9000/-', image: p49, category: 'women' },
    { id: 50, name: 'Product 50', price: '₹3999/-', image: p50, category: 'women' }
  ];
  const applyFilter = () => {
    const filtered = productsData.filter(product => {
      const price = parseInt(product.price.replace('₹', '').replace('/-', '').replace(',', ''));
      const withinPriceRange = price >= minPrice && price <= maxPrice;
      const matchGender = genderFilter ? product.category === genderFilter : true;
      return withinPriceRange && matchGender;
    });
    setFilteredProducts(filtered);
    setShowFilteredProducts(true);
  };

  const resetFilter = () => {
    setMinPrice(0);
    setMaxPrice(100000);
    setGenderFilter('');
    setShowFilteredProducts(false);
  };

  return (
    <div className="products-container">
      <h2>Welcome to our Fashion Store!</h2>
      <div className="filter-button">
        <button onClick={showFilteredProducts ? resetFilter : applyFilter}>
          {showFilteredProducts ? "Show All Products" : "Filter Products"}
        </button>
      </div>
      {showFilteredProducts && (
        <div className="filter">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          />
          <div className="gender-filter">
            <label>
              <input
                type="radio"
                name="gender"
                value=""
                checked={genderFilter === ''}
                onChange={() => setGenderFilter('')}
              />
              All Genders
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="men"
                checked={genderFilter === 'men'}
                onChange={() => setGenderFilter('men')}
              />
              Men
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="women"
                checked={genderFilter === 'women'}
                onChange={() => setGenderFilter('women')}
              />
              Women
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="kids"
                checked={genderFilter === 'kids'}
                onChange={() => setGenderFilter('kids')}
              />
              Kids
            </label>
          </div>
          <button onClick={applyFilter}>Apply</button>
        </div>
      )}
      <div className="product-grid">
        {(showFilteredProducts ? filteredProducts : productsData).map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
            {/* Add to Cart button */}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            {/* Buy Now button */}
            <button onClick={() => handleBuyNow(product.id)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;