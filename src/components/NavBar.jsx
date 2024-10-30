// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { auth } from "../firebaseConfig";
import './Main.css';
export default function Navbar() {
  const { currentUser } = useAuth();

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <nav>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
            <Link to="/Booking">Book Now</Link>
            {currentUser && <button onClick={handleLogout}>Logout</button>}
        </ul>
      
    </nav>
  );
}
