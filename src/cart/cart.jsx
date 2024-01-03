import React from 'react';

function Cart({ cartItems, onClose }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className='listyle'>
            <p>Name: {item.name}</p>
            <p>Description: {item.discription}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: 1</p>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close Cart</button>
    </div>
  );
}

export default Cart;
