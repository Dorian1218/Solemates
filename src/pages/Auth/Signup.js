import { useState } from "react";
import "./Signup.css";
import React, { useContext } from "react";
//import { auth } from "../../firebase";

function Signup() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const user = { username, email, password };
    console.log(user);
  }
  return (
    <div className="signup-div">
      <div className="formContainer">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <br />

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />

          <button>Signup</button>
          <br />
        </form>
      </div>
      <p>Already Have an Account? Login</p>
    </div>
  );
}

export default Signup;
