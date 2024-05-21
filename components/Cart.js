import React from 'react';
import './files/Cart.css'; // Import your CSS file

const Cart = ({ cartItems, removeFromCart }) => {
  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <ul className="cart-items-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
