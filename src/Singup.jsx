import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider  } from 'firebase/auth'
import { auth } from './Firebase.js/Firebase'

const Signup = () => {
  const [emails, setEmail] = useState("")
  const [emailpass, setEmailpass] = useState("")
  const navigate = useNavigate()

  const handleSign = async () => {
    if (emails !== "" && emailpass !== "") {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, emails, emailpass)
        console.log("User created:", userCredential.user)
        alert("Successfully registered! 🎉")
        navigate('/login')
      } catch (error) {
        console.error("Error:", error.code, error.message)
        alert(error.message)
      }
    } else {
      alert("Please enter email and password!")
    }
  }
  const handelgoogle = ()=>{
    const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token)
    // The signed-in user info.
    const user = result.user;
    console.log(user)

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode)

    const errorMessage = error.message;
    console.log(errorMessage)

    // The email of the user's account used.
    const email = error.customData.email;
    console.log(email)

    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential)

    // ...
  });

  }

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1 className="signup-title">Create Your Account</h1>
        <p className="signup-sub">Join us and explore amazing features 🚀</p>

        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={emails}
        />
        <input
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setEmailpass(e.target.value)}
          value={emailpass}
        />

        <button onClick={handleSign}>Sign Up</button>
        <button onClick={handelgoogle}> Sing in with Google</button>

        <p className="signup-footer">
          Already have an account? <span onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  )
}

export default Signup
