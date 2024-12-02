import React from "react";

export default function Item({ id, quantity, description, packed, handleDeleteItem, handleUpdateItem }) {
    return (
      <li style={{ textDecoration: packed ? "line-through" : "none" }}>
        {/* Checkbox for packed status */}
        <input
          type="checkbox"
          checked={packed} // Controlled by the item's packed state
          onChange={() => handleUpdateItem(id)} // Trigger the update function on change
          style={{ marginRight: "10px" }}
        />
        <strong>Quantity:</strong> {quantity} <strong>Description:</strong> {description}
        {/* Delete button */}
        <button onClick={() => handleDeleteItem(id)} style={{ marginLeft: "10px" }}>
          🗑️ Delete
        </button>
      </li>
    );
  }