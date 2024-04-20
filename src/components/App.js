import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function Section1() {
  return (
    <div>
      <h2>Section 1</h2>
      <form id="info-form">
        <label htmlFor="full_name">Full Name</label>
        <input type="text" id="full_name" />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <br />
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input type="password" id="password_confirmation" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function Section2() {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirmation = passwordConfirmationRef.current.value;

    // Handle submission logic here
    console.log(fullName, email, password, passwordConfirmation);
  };

  return (
    <div>
      <h2>Section 2</h2>
      <form id="info-form" onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name</label>
        <input type="text" id="full_name" ref={fullNameRef} />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} />
        <br />
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          ref={passwordConfirmationRef}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function Section3() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle submission logic here
    console.log(fullName, email, password, passwordConfirmation);
  };

  return (
    <div>
      <h2>Section 3</h2>
      <form id="info-form" onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name</label>
        <input
          type="text"
          id="full_name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/section1" id="form-link">
              Section 1
            </Link>
          </li>
          <li>
            <Link to="/section2" id="form-ref-link">
              Section 2
            </Link>
          </li>
          <li>
            <Link to="/section3" id="form-state-link">
              Section 3
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/section1">
          <Section1 />
        </Route>
        <Route path="/section2">
          <Section2 />
        </Route>
        <Route path="/section3">
          <Section3 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
