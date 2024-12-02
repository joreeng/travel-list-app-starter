import React from "react";
import { useState } from "react";

export default function Form({ handleAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (!description.trim()) {
        alert("Please enter a valid description!");
        return;
      }
  
      // Create a new item
      const newItem = {
        id: Date.now(),
        description: description.trim(),
        quantity,
        packed: false,
      };
  
      // Call the handleAddItems function passed via props
      handleAddItems(newItem);
  
      // Reset states
      setDescription("");
      setQuantity(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        {/* Dropdown for quantity */}
        <label>
          Quantity:
          <select
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))} // Convert value to number
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
  
        {/* Input field for item description */}
        <label>
          Description:
          <input
            type="text"
            placeholder="Item..."
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} // Update state with input value
          />
        </label>
  
        {/* Add button */}
        <button type="submit">Add</button>
      </form>
    );
  }