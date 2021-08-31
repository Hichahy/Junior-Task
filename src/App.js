import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Contact from "./components/Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
