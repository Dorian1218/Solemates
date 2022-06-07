import { useState } from "react";
import { UserAuth } from "/src/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import "./Signup.css";
function Signup() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [ConfirmPassword, SetConfirmPassword] = useState("");
  let [error, setError] = useState("");
  const navigate = useNavigate();

  const { createUser, user } = UserAuth();

  let variantBtn = "primary";

  let non = false;

  if (
    username === "" ||
    email === "" ||
    password === "" ||
    ConfirmPassword === ""
  ) {
    non = true;
    variantBtn = "secondary";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      return setError("At least 8 characters in length");
    }

    if (password !== ConfirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      if (e.message === "Firebase: Error (auth/email-already-in-use).") {
        setError("Email is already in use");
      }

      if (e.message === "Firebase: Error (auth/invalid-email).") {
        setError("The email used in invalid");
      }
    }
  };

  return (
    <Container
      className="d-flex align-items-center"
      style={{ flexDirection: "column" }}
    >
      <Card style={{ maxWidth: "400px", width: "100vw" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Signup</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group id="ConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={ConfirmPassword}
                onChange={(e) => SetConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              variant={variantBtn}
              size="sm"
              className="w-100 mt-2"
              type="submit"
              style={{ height: "38px" }}
              disabled={non}
            >
              Signup
            </Button>
          </Form>
        </Card.Body>
        <p style={{ marginLeft: "20px" }}>Password must be 8 characters</p>
      </Card>
      <div className="w-100 text-center" style={{ marginBottom: "50px" }}>
        <p>
          Already have an Account? <Link to="/Auth/Login">Login</Link>
        </p>
      </div>
    </Container>
  );
}
export default Signup;
