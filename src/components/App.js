import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/form" activeClassName="active">
                Form
              </NavLink>
            </li>
            <li>
              <NavLink to="/form-ref" activeClassName="active">
                Form with Ref
              </NavLink>
            </li>
            <li>
              <NavLink to="/form-state" activeClassName="active">
                Form with State
              </NavLink>
            </li>
          </ul>
        </nav>

        <Route path="/form" component={Form} />
        <Route path="/form-ref" component={FormRef} />
        <Route path="/form-state" component={FormState} />
      </div>
    </Router>
  );
};

export default App;
