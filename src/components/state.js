import React from "react";
import { useState } from "react";

export default function Stats({ items }) {
    // Total number of items
    const totalItems = items.length;
  
    // Number of packed items
    const packedItems = items.filter((item) => item.packed).length;
  
    // Percentage of packed items
    const percentage = totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;
  
    return (
      <footer className="stats">
        {totalItems === 0 ? (
          <em>Start adding items to your packing list! ✈️</em>
        ) : (
          <em>
            You have {totalItems} item{totalItems !== 1 && "s"} in your list, and you already packed{" "}
            {packedItems} ({percentage}%).
            {percentage === 100 && " 🎉 You got everything!"}
          </em>
        )}
      </footer>
    );
  }
  