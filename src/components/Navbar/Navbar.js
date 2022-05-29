import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function CreateNavbar() {
  return (
    <>
      <div class="header">
        <h5 className="header-text">Solemates</h5>
        <Link style={{ textDecoration: "none" }} to="/">
          <p className="links">Home</p>
        </Link>
        <Link style={{ textDecoration: "none" }} to="./about">
          <p className="links">About</p>
        </Link>
        <Link style={{ textDecoration: "none" }} to="./contacts">
          <p className="links">Contact</p>
        </Link>
        <Link to="./Auth/Signup">
          <Button
            style={{ padding: 0, height: 26, width: 51 }}
            variant="primary"
          >
            Signup
          </Button>
        </Link>
      </div>
      <br />
    </>
  );
}

export default CreateNavbar;
