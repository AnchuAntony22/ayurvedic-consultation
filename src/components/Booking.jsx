import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Button, Container, Row, Col, Alert } from "react-bootstrap";
import { firestore } from "../firebaseConfig";
import { useAuth } from "../AuthContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

export default function Booking() {
  const { currentUser } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const handleBooking = async () => {
    try {
      console.log("User:", currentUser);
      console.log("Selected Date:", selectedDate);

      if (!currentUser || !currentUser.email) {
        throw new Error("User is not logged in or email is not available.");
      }

      await addDoc(collection(firestore, "bookings"), {
        user: currentUser.email,
        date: Timestamp.fromDate(selectedDate) // Store date as Firestore Timestamp
      });
      setAlertMessage("Booking confirmed for " + selectedDate.toDateString());
    } catch (error) {
      console.error("Failed to book:", error);
      setAlertMessage("Failed to book: " + error.message);
    }
  };

  if (!currentUser) {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Alert variant="danger">
              You need to be logged in to access this page.
            </Alert>
            <Button variant="primary" onClick={() => navigate("/login")}>
              Go to Login
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Book Your Consultation</h2>
          {alertMessage && <Alert variant="success">{alertMessage}</Alert>}
          <div className="mb-3">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="form-control"
              dateFormat="MMMM d, yyyy"
            />
          </div>
          <Button variant="primary" onClick={handleBooking}>
            Confirm Booking
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
