import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Noah from "./Noah";
import Ryleigh from "./Ryleigh";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="title">Random Selfies With Grandpa 📸</h1>
        <Routes className="routes">
          <Route exact path="/" element={<Home />} />
          <Route path="/Noah" element={<Noah />} />
          <Route path="/Ryleigh" element={<Ryleigh />} />
        </Routes>

        <Nav />
      </div>
    </Router>
  );
}

export default App;
