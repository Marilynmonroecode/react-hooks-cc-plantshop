// components/PlantCard.js
import React from "react";

function PlantCard({ plant, onToggleSoldOut }) {
  const { name, image, price, soldOut } = plant;
  
  return (
    <li className="card" data-testid="plant-item">
      <img 
        src={image || "https://via.placeholder.com/400"} 
        alt={name} 
      />
      <h4>{name}</h4>
      <p>Price: ${price.toFixed(2)}</p>
      {!soldOut ? (
        <button 
          className="primary"
          onClick={() => onToggleSoldOut(plant.id)}
        >
          In Stock
        </button>
      ) : (
        <button 
          onClick={() => onToggleSoldOut(plant.id)}
        >
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;