// Initial packing items
import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packinglist";
import Stats from "./state";

// Define initialItems here
const initialItems = [
  { id: 1, description: 'T-shirt', quantity: 2, packed: false },
  { id: 2, description: 'Jeans', quantity: 1, packed: false },
  { id: 3, description: 'Shoes', quantity: 1, packed: false },
];

// App component definition
export default function App() {
  const [items, setItems] = useState(initialItems); // Define items state
  
  // Handle updating packed status
  function handleUpdateItem(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Handle deleting item
  function handleDeleteItem(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={(newItem) => setItems((prev) => [...prev, newItem])} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleUpdateItem={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}
