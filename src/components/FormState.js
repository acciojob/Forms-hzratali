// FormState.js
import React, { useState } from "react";

const FormState = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission using useState
    const formData = {
      full_name: fullName,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
    };
    console.log(formData);
  };

  return (
    <form id="info-form" onSubmit={handleSubmit}>
      <label htmlFor="full_name">Full Name</label>
      <input
        type="text"
        id="full_name"
        name="full_name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="password_confirmation">Password Confirmation</label>
      <input
        type="password"
        id="password_confirmation"
        name="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormState;
