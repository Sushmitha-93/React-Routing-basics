import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//React router gives us 3 components - [Route,Link,BrowserRouter] which help us to implement the routing.
// Import "Switch" component from react-router to help us render components only when path matches
// otherwise fall on not-found component.
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Users from "./components/users";
import Contact from "./components/contact";
import Notfound from "./components/notfound";

//In each Route component, we need to pass 2 props - "path", "component"
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Switch>
        {/*user "exact" because "/" is common in all and App component will get rendered in all paths */}
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route children={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
