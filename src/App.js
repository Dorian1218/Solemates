import React from "react";
import "./App.css";

import CreateNavbar from "./components/Navbar/Navbar.js";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer/Footer";
import { AuthContextProvider, UserAuth } from "/src/AuthContext";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Account from "./pages/Auth/Account";

function App() {
  const { user } = UserAuth();
  return (
    <div className="App">
      <nav>
        <AuthContextProvider>
          <CreateNavbar />
        </AuthContextProvider>
      </nav>

      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contacts" element={<Contacts />}></Route>
          {!user && <Route path="/Auth/Signup" element={<Signup />}></Route>}
          {!user && <Route path="/Auth/Login" element={<Login />}></Route>}
          {user && <Route path="/Auth/Account" element={<Account />}></Route>}
        </Routes>
      </AuthContextProvider>

      <Footer></Footer>
    </div>
  );
}

export default App;
