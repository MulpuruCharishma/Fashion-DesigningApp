import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './files/Checkout.css';

function Checkout({ addToOrders }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [shippingAddress, setShippingAddress] = useState({
    country: '',
    state: '',
    city: '',
    landmark: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  let { productId } = useParams();

  useEffect(() => {
    const getProductById = async (id) => {
      // Fetch product details using the productId
      // Replace this dummy product with actual fetching logic
      const dummyProduct = {
        id: id,
        name: `Product 1`,
        price: `$20`,
      };
      setProduct(dummyProduct);
    };

    getProductById(productId);
  }, [productId]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Order processed:", { 
      product,
      quantity,
      size,
      shippingAddress,
      paymentMethod
    });

    // Create the order object with the correct structure
    const order = {
      product: product,
      quantity: quantity,
      size: size,
      shippingAddress: shippingAddress,
      paymentMethod: paymentMethod
    };

    // Add the order to the orders list
    addToOrders(order);

    setOrderPlaced(true);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div>
        <h3>Product Details</h3>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
      </div>
      {orderPlaced ? (
        <div className="success-message">Your order was successful!</div>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </label>
          <br />
          <fieldset>
            <legend>Size:</legend>
            <label>
              <input
                type="radio"
                value="S"
                checked={size === 'S'}
                onChange={() => setSize('S')}
              />
              Small
            </label>
            <label>
              <input
                type="radio"
                value="M"
                checked={size === 'M'}
                onChange={() => setSize('M')}
              />
              Medium
            </label>
            <label>
              <input
                type="radio"
                value="L"
                checked={size === 'L'}
                onChange={() => setSize('L')}
              />
              Large
            </label>
          </fieldset>
          <br />
          <label>
            Country:
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
              required
            />
          </label>
          <br />
          <label>
            State:
            <input
              type="text"
              value={shippingAddress.state}
              onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
              required
            />
          </label>
          <br />
          <label>
            City:
            <input
              type="text"
              value={shippingAddress.city}
              onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
              required
            />
          </label>
          <br />
          <label>
            Landmark:
            <input
              type="text"
              value={shippingAddress.landmark}
              onChange={(e) => setShippingAddress({ ...shippingAddress, landmark: e.target.value })}
              required
            />
          </label>
          <br />
          <label>
            Payment Method:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="cash_on_delivery">Cash on Delivery</option>
              <option value="credit_debit_card">Credit/Debit Card</option>
              <option value="net_banking">Net Banking</option>
              <option value="upi">UPI</option>
            </select>
          </label>
          <br />
          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
