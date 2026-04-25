//// client/src/components/ProductCard.js

import React from "react";

function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductCard;

