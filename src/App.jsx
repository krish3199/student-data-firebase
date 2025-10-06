import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from './Firebase.js/Firebase';
import './App.css'   // 👈 stylish animated CSS import

const App = () => {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [age, setAge] = useState("")

  const handelADD = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name,
        surname,
        age
      });
      console.log("Document written with ID: ", docRef.id);
      alert("🎉 User added successfully!");
      setName("");
      setSurname("");
      setAge("");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("❌ Error adding user, please try again.");
    }
  }

  return (
    <div className="form-wrapper">
      <div className="gradient-bg"></div>

      <div className="form-card">
        <h1>Add User</h1>
        <p className="subtitle">Save user data securely to Firebase</p>

        <div className="input-box">
          <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Enter Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
          <input type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
          <button onClick={handelADD}>Add User</button>
        </div>
      </div>
    </div>
  )
}

export default App
