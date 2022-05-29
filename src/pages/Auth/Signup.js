import { useState } from "react";
import { UserAuth } from "/src/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import "./Signup.css";
function Signup() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [ConfirmPassword, SetConfirmPassword] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { createUser } = UserAuth();

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
      setLoading(true);
      await createUser(email, password);
      navigate("/");
    } catch {
      setError("Failed to create an account");
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
              variant="primary"
              size="sm"
              className="w-100 mt-2"
              type="submit"
              style={{ height: "38px" }}
              disabled={loading}
            >
              Signup
            </Button>
            <p></p>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <p1>
          Already have an Account? <Link to="/Auth/Login">Login</Link>
        </p1>
      </div>
    </Container>
  );
}
export default Signup;
