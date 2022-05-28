import { useState } from "react";
import { UserAuth } from "/src/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
function Signup() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  const navigate = useNavigate();

  const createUser = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div class="signup-div">
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
          <br />
          <p>
            Already Have an Account? <Link to="/Auth/Login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
