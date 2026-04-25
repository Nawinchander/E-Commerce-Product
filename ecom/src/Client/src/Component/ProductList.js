
import React, { useEffect, useState } from "react";
import api from "../api";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;


// import React, { useEffect, useState } from "react";
// import api from "../api";

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     api.get("/products").then(res => setProducts(res.data));
//   }, []);

//   return (
//     <div>
//       <h2>Products</h2>
//       {products.map(product => (
//         <div key={product._id}>
//           {product.name} - ₹{product.price}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;

