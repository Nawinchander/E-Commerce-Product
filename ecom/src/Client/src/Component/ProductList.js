import React, { useEffect, useState } from "react";
import api from "../api";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product._id}>
          {product.name} - ₹{product.price}
        </div>
      ))}
    </div>
  );
}

export default ProductList;

