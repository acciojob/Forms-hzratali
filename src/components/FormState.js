import React, { useState } from "react";
import Card from "./Card";

const FormState = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic using state
  };

  return (
    <Card title="Form with State">{/* Your form using state here */}</Card>
  );
};

export default FormState;
