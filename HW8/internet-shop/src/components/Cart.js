import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'T-shirt', price: 30, quantity: 2 },
    { id: 2, title: 'Hoodie', price: 50, quantity: 1 },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} x 
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            />
          </li>
        ))}
      </ul>
      <h3>Grand Total: ${total}</h3>
      
      {/* Кнопка перехода обратно в каталог */}
      <Link to="/">
        <button>Back to Catalog</button>
      </Link>
    </div>
  );
};

export default Cart;
