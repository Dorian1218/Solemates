import React from "react";
import "./App.css";

import CreateNavbar from "./components/Navbar/Navbar.js";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer/Footer";
// import Signup from "./pages/Auth/Signup";
// import Login from "./pages/Auth/Login";
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <div className="App">
      <nav>
        <CreateNavbar />
      </nav>

      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contacts" element={<Contacts />}></Route>
          <Route path="/Auth/Signup" element={<Signup />}></Route>
          <Route path="/Auth/Login" element={<Login />}></Route>
        </Routes>
      </AuthContextProvider>

      <Footer></Footer>
    </div>
  );
}

export default App;
