import React, { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'ELLERY X M\'O CAPSULE', price: 52, quantity: 1 },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.title} - ${item.price.toFixed(2)} x 
            <input 
              type="number" 
              value={item.quantity} 
              onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
              min="1"
            />
          </p>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
