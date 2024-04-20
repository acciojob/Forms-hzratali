// FormRef.js
import React, { useRef } from "react";

const FormRef = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission using useRef
    const formData = {
      full_name: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };
    console.log(formData);
  };

  return (
    <form id="info-form" onSubmit={handleSubmit}>
      <label htmlFor="full_name">Full Name</label>
      <input type="text" id="full_name" name="full_name" ref={fullNameRef} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" ref={emailRef} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" ref={passwordRef} />

      <label htmlFor="password_confirmation">Password Confirmation</label>
      <input
        type="password"
        id="password_confirmation"
        name="password_confirmation"
        ref={passwordConfirmationRef}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormRef;
