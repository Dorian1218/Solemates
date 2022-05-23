import { useState } from "react";
import "./Signup.css";
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
    <div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <br />

          <input
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />

          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />

          <button>Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
