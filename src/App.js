import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Goals from "./components/Goals";
import { BrowserRouter as Router } from "react-router-dom";
import AddGoal from "./components/AddGoal";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Navbar />
            <AddGoal />
            <Goals />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
