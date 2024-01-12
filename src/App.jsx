// App.jsx

import React, { useState, useEffect } from 'react';
import Header_element from './components/Header_element';
import ListItem from './components/ListItem';
import Cart from './cart/cart';

function App() {
  const [itemList, setItemList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const fetchCartDataFromServer = async () => {
    try {
      const response = await fetch('https://crudcrud.com/api/362fdaae8b9f49e3b6705f45f4132936/cart');
      if (response.ok) {
        const data = await response.json();
        setCartItems(data || []);
      } else {
        console.error('Failed to fetch cart items from server:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching cart items from server:', error);
    }
  };

  useEffect(() => {
    fetchCartDataFromServer(); // Fetch cart data when the component mounts
  }, []);

  const postItemToServer = async (item) => {
    try {
      const response = await fetch('https://crudcrud.com/api/362fdaae8b9f49e3b6705f45f4132936/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error(`Failed to add item to server. Status: ${response.status}`);
      }

      console.log('Item added to server successfully');
    } catch (error) {
      console.error('Error adding item to server:', error);
    }
  };

  const handleSubmitData = (newData) => {
    setItemList([...itemList, newData]);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);

    // Call the function to post the item to the server
    postItemToServer(item);
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
      <ListItem itemList={itemList} onAddToCart={handleAddToCart} onPostToServer={postItemToServer} />

      {/* Conditionally render the Cart component */}
      {isCartOpen && <Cart cartItems={cartItems} onClose={closeCart} />}
    </div>
  );
}

export default App;
