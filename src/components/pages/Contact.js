import React from "react";
import { useState } from "react";
import { validateEmail } from "../../util/helper";


export default function Contact() {
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(e.target.email.value)) {
      alert("Please include a username and a valid email.");
    } else {
      setUserame("");
      setEmail("");
      setMessage("");
      alert("Thank you!");
    }
    // Send email/message using backend or email service of choice
    // Clear input fields
  };
  const styles = {
    background: "#EEEEEE"
  }
  return (
    <div className="container mt-4 position relative">
      <h1 className="text-center" style={{color: "#EEEEEE"}}>Contact Me!</h1>
      <div className="mt-5 align-items-center justify-content-center d-flex flex-column"  >
        <form
          onSubmit={handleSubmit}
          className="row g-2"
        >
          <div className="mb-5 row">
            <label htmlFor="username" className="form-control" style={styles}>
              Your name:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUserame(e.target.value)}
              style={styles}
            />
          </div>
          <div className="mb-5 row">
            <label htmlFor="email" className="form-control" style={styles}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles}
            />
          </div>
          <div className="mb-5 row">
            <label htmlFor="message" className="form-control" style={styles}>
              Message:
            </label>
            <input
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={styles}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
