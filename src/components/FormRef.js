import React, { useRef } from "react";
import Card from "./Card";

const FormRef = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic using refs
  };

  return <Card title="Form with Ref">{/* Your form using refs here */}</Card>;
};

export default FormRef;
