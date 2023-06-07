import React from 'react';
import { useState } from 'react';
import { validateEmail } from '../../util/helper';

export default function Contact() {
  const [username, setUserame] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!(validateEmail(e.target.email.value))){
      alert("Please include a username and a valid email.")
    } else {
      setUserame('');
      setEmail('');
      setMessage('');
      alert("Thank you!")
    }
    // Send email/message using backend or email service of choice
    // Clear input fields
  };

  return (
    <form onSubmit={handleSubmit} className='justify-content-center'>
      <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUserame(e.target.value)}
      />
      </div>
      <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div>
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      </div>
      <div><button type="submit">Submit</button></div>
    </form>
  );
}
