import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar Component */}
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default App;
