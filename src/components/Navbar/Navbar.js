import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <ul className="navbar-items">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="./about">
          <li>About</li>
        </Link>
        <Link to="./contacts">
          <li>Contact</li>
        </Link>
        <Link to="./Auth/login">
          <button>Login</button>
        </Link>
      </ul>
    </header>
  );
}

export default Navbar;
