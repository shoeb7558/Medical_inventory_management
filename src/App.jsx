// App.jsx
import React, { useState } from 'react';
import Header_element from './components/Header_element';
import ListItem from './components/ListItem';
import Cart from './cart/cart';

function App() {
  const [itemList, setItemList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSubmitData = (newData) => {
    setItemList([...itemList, newData]);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <Header_element onsubmit={handleSubmitData} onCartOpen={openCart} />
      <ListItem itemList={itemList} onAddToCart={handleAddToCart} />

      {/* Conditionally render the Cart component */}
      {isCartOpen && <Cart cartItems={cartItems} onClose={closeCart} />}
    </div>
  );
}

export default App;
