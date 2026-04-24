import React, { useState } from "react";
import api from "../api";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: ""
  });

  const handleSubmit = async () => {
    await api.post("/products", form);
    alert("Product Added");
  };

  return (
    <div>
      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})} />
      <input placeholder="Price" onChange={e => setForm({...form, price:e.target.value})} />
      <input placeholder="Category" onChange={e => setForm({...form, category:e.target.value})} />
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
}

export default AddProduct;
