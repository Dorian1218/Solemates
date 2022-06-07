import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button, Navbar, Container } from "react-bootstrap";
import { UserAuth } from "../../AuthContext";
import "./Navbar.css";

function CreateNavbar() {
  const { user } = UserAuth();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <div class="header" style={{ alignItems: "center" }}>
          <h5 className="header-text">Solemates</h5>
          <Link style={{ textDecoration: "none", marginTop: 10 }} to="/">
            <p className="links">Home</p>
          </Link>
          <Link style={{ textDecoration: "none", marginTop: 10 }} to="./about">
            <p className="links">About</p>
          </Link>
          <Link
            style={{ textDecoration: "none", marginTop: 10 }}
            to="./contacts"
          >
            <p className="links">Contact</p>
          </Link>
          {!user && (
            <Link to="./Auth/Signup">
              <Button
                style={{
                  padding: 0,
                  height: 26,
                  width: 52,
                  marginRight: 10,
                  marginBottom: 5
                }}
                variant="primary"
              >
                Signup
              </Button>
            </Link>
          )}
          {user && (
            <Link to="./Auth/Account">
              <BsFillPersonFill
                class="person-icon"
                style={{ color: "gray", marginBottom: 5, fontSize: "24" }}
              />
            </Link>
          )}
        </div>
      </Navbar>
      <br />
    </div>
  );
}

export default CreateNavbar;
