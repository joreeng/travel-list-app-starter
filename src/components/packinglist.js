import React from 'react'; // React is only imported once here
import Item from './item'; // Import the Item component

export default function PackingList({ items, handleDeleteItem, handleUpdateItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            quantity={item.quantity}
            description={item.description}
            packed={item.packed}
            handleDeleteItem={handleDeleteItem}
            handleUpdateItem={handleUpdateItem}
          />
        ))}
      </ul>
    </div>
  );
}
