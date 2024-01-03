import React, { useState } from 'react';
import './Header_elementModule.css';

function Header_element({ onsubmit, onCartOpen }) {
  const [name, setname] = useState('');
  const [discription, setdiscription] = useState('');
  const [price, setprice] = useState('');
  const [quantity, setquantity] = useState('');
  const [data, setdata] = useState([]);

  const handleData = () => {
    // Create an object with the collected data
    const newData = {
      name: name,
      discription: discription,
      price: price,
      quantity: quantity,
    };

    // Check if onsubmit is provided and is a function before calling it
    if (onsubmit && typeof onsubmit === 'function') {
      onsubmit(newData);
    }

    // Update the data array with the new object
    setdata([...data, newData]);

    // Clear the input fields after adding data
    setname('');
    setdiscription('');
    setprice('');
    setquantity('');
  };

  return (
    <div className='HearderDiv'>
      <input
        value={name}
        onChange={(e) => setname(e.target.value)}
        type='text'
        className='inputElement'
        placeholder='Medicine Name'
      />
      <input
        value={discription}
        onChange={(e) => setdiscription(e.target.value)}
        type='text'
        className='inputElement'
        placeholder='discription'
      />
      <input
        value={price}
        onChange={(e) => setprice(e.target.value)}
        type='number'
        className='inputElement'
        placeholder='price'
      />
      <input
        value={quantity}
        onChange={(e) => setquantity(e.target.value)}
        type='number'
        className='inputElement'
        placeholder='quantity'
      />
      
      <button className='inputButton' onClick={handleData}>
        Add
      </button>
      <button className='inputButton' onClick={onCartOpen}>
        Cart
      </button>
    </div>
  );
}

export default Header_element;
