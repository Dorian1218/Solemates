import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <ul className="navbar-items">
        <div className="contianer-ul-items">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="./about">
            <li>About</li>
          </Link>
          <Link to="./contacts">
            <li>Contact</li>
          </Link>
          <Link to="./Auth/Signup">
            <button className="signup-btn">Signup</button>
          </Link>
        </div>
      </ul>
    </header>
  );
}

export default Navbar;
