import "./App.css";
import React, { useState } from "react";
import Burger from "./components/BurgerDropDown/Burger";
import Menu from "./components/BurgerDropDown/Menu/index";
import Home from "./components/Home";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Router>
    
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/resume" element={<Navigate to="/"/>} /> 
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>

     
     
    </Router>
  );
}

export default App;
