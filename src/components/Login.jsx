// src/components/Login.js
import React, { useRef } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/booking");
    } catch (error) {
      console.error("Failed to log in:", error.message);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1> {/* Title added */}
      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="login-input"
          type="email"
          ref={emailRef}
          placeholder="Email"
          required
        />
        <input
          className="login-input"
          type="password"
          ref={passwordRef}
          placeholder="Password"
          required
        />
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
}
