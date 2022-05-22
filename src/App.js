import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer/Footer";
import Signup from "./pages/Auth/Login";

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
        <Route path="/Auth/login" element={<Signup />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
