import React, { useState, useEffect } from 'react';
import './ListItemModule.css';

function ListItem({ itemList, onAddToCart }) {
  const [data, setData] = useState(itemList);

  useEffect(() => {
    setData(itemList);
  }, [itemList]);

  const handleAddToCart = (item) => {
    // Decrease the quantity by 1
    const updatedItem = { ...item, quantity: item.quantity - 1 };

    // Call the onAddToCart callback with the updated item
    onAddToCart(updatedItem);

    // Update the data state to reflect the changed quantity
    const updatedData = data?.map((dataItem) =>
      dataItem === item ? updatedItem : dataItem
    );

    // Update the state with the new data
    setData(updatedData);
  };

  return (
    <div className='listdiv'>
      <ul>
        {data?.map((item, index) => (
          <li key={index} className='listyle'>
            <span>{item.name}</span>
            <span>{item.discription}</span>
            <span>{item.price}</span>
            <span>
              {item.quantity > 0 ? (
                // Display the updated quantity if it's greater than 0
                item.quantity
              ) : (
                // If quantity is 0, display a message or handle it as needed
                'Out of Stock'
              )}
            </span>
            <button
              style={{ borderRadius: '20px', padding: '5px' }}
              onClick={() => handleAddToCart(item)}
              disabled={item.quantity === 0} // Disable the button if quantity is 0
            >
              Add Item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItem;
