import React from "react";
import { useState } from "react";
import styles from "./Newsletter.module.css";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [succesMessage, setSuccesMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsSubmitted(true);
      setSuccesMessage("Successfully subscribed!");
      setTimeout(() => {
        setEmail("");
        setSuccesMessage("");
      }, 1500);
    } else {
      setIsSubmitted(false);
      setErrorMessage("Please enter a valid email address.");
      setTimeout(() => {
        setEmail("");
        setErrorMessage("");
      }, 2000);
    }
  };

  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletter__info}>
        <h2>Subscribe to our Newsletter</h2>
        <p>Stay updated with our latest news and trends!</p>
      </div>

      <div className={styles.messages}>
        {isSubmitted && (
          <p className={styles.successMessage}>{succesMessage}</p>
        )}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </div>

      <div className={styles.newsletter__subscribe}>
        <input
          type="email"
          placeholder="something@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Subscribe</button>
      </div>
    </div>
  );
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
