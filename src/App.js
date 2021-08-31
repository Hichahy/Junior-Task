import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Contact from "./components/Pages/Contact/Contact";
import Reports from "./components/Pages/Reports/Reports"
import Products from "./components/Pages/Products/Products";
import Team from "./components/Pages/Team/Team";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Reports" component={Reports}/>
          <Route path="/Products" component={Products}/>
          <Route path="/Team" component={Team}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
