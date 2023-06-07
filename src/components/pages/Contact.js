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

  return (
    <div className="container mt-4">
      <div className="align-items-center justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="row g-2"
        >
          <div className="mb-3 row d-inline-flex">
            <label htmlFor="username" className="form-control">
              Your name:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUserame(e.target.value)}
            />
          </div>
          <div className="mb-3 row d-inline-flex">
            <label htmlFor="email" className="form-control">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 row d-inline-flex">
            <label htmlFor="message" className="form-control">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
