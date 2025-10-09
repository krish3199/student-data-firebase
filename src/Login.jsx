import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from './Firebase.js/Firebase'
import './App.css'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (username !== "" && password !== "") {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, username, password)
        console.log("User Logged In:", userCredential.user)
        alert("Login successful! 🎉")
        navigate('/Admin')
      } catch (error) {
        console.error("Login Error:", error.code, error.message)
        alert("Invalid email or password ❌")
      }
    } else {
      alert("Please enter email and password!")
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Welcome Back 👋</h1>
        <p className="auth-sub">Login to continue your journey 🚀</p>

        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button onClick={handleLogin}>Log In</button>

        {/* <p className="auth-footer">
          Don’t have an account?{" "}
          <span onClick={() => navigate('/signup')}>Sign Up</span>
        </p> */}
      </div>
    </div>
  )
}

export default Login
