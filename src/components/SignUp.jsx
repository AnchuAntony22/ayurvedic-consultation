import React, { useRef } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import correct function

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/booking"); // Redirect to booking page after successful sign-up
    } catch (error) {
      console.error("Failed to sign up:", error.message);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1> {/* Title added */}
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="email"
          ref={emailRef}
          placeholder="Email"
          required
          className="signup-input"
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          required
          className="signup-input"
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}
