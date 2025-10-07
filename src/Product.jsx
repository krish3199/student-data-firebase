import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './Firebase.js/Firebase';

const Product = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let isMounted = true; // ✅ prevent state update if component unmounted

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        if (isMounted) {
          const userList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setUsers(userList);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();

    return () => { isMounted = false } // cleanup
  }, []);

  return (
    <div className="product-list">
      <h1>All Products</h1>
      {users.length === 0 ? <p>No products found!</p> :
        <div className="user-grid">
          {users.map(u => (
            <div className="user-card" key={u.id}>
              <img src={u.imgurl} alt={u.title} className="user-img" />
              <h3>{u.title}</h3>
              <p>{u.dec}</p>
              <span>₹{u.price}</span>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Product;
