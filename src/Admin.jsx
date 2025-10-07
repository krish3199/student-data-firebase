import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from './Firebase.js/Firebase';
import './App.css';
import { useNavigate } from 'react-router-dom'; // ✅ React Router navigation

const Admin = () => {
  const [title, setTitle] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [price, setPrice] = useState("");
  const [dec, setDec] = useState("");

  const navigate = useNavigate(); // ✅ for navigating programmatically

  const handelADD = async () => {
    if (title && imgurl && price && dec) {
      try {
        await addDoc(collection(db, "users"), { title, imgurl, price, dec });
        alert("🎉 Product added successfully!");
        setTitle(""); setImgurl(""); setPrice(""); setDec("");
      } catch (e) {
        console.error("Error adding document:", e);
        alert("❌ Error adding product!");
      }
    } else {
      alert("Please fill all fields!");
    }
  }

  return (
    <div className="form-wrapper">
      <div className="gradient-bg"></div>

      <div className="form-card">
        <h1>Add Product</h1>
        <div className="input-box">
          <input type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
          <input type="text" placeholder="Enter image URL" value={imgurl} onChange={e => setImgurl(e.target.value)} />
          <input type="text" placeholder="Enter description" value={dec} onChange={e => setDec(e.target.value)} />
          <input type="number" placeholder="Enter price" value={price} onChange={e => setPrice(e.target.value)} />

          <button onClick={handelADD}>Add Product</button>
          <button onClick={() => navigate('/product')}>Get Data</button> {/* ✅ Navigate to /product */}
        </div>
      </div>
    </div>
  )
}

export default Admin;
