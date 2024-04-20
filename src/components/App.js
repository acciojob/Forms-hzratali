import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // import Routes
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

const App = () => {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Wrap your routes with Routes */}
        <Route path="/form" element={<Form />} />{" "}
        {/* Use element prop to render components */}
        <Route path="/form-ref" element={<FormRef />} />
        <Route path="/form-state" element={<FormState />} />
      </Routes>
    </Router>
  );
};

export default App;
