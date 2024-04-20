// Form.js
import React from "react";

const Form = () => {
  return (
    <form id="info-form">
      <label htmlFor="full_name">Full Name</label>
      <input type="text" id="full_name" name="full_name" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />

      <label htmlFor="password_confirmation">Password Confirmation</label>
      <input
        type="password"
        id="password_confirmation"
        name="password_confirmation"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
