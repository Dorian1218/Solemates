import { useState, useRef } from "react";
import { UserAuth } from "/src/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";
import "./Signup.css";
function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
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
    <Container
      className="d-flex align-items-center"
      style={{ flexDirection: "column" }}
    >
      <Card style={{ minWidth: "400px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Signup</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={emailRef}
                required
              />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              size="sm"
              className="w-100 mt-2"
              type="submit"
              style={{ height: "38px" }}
            >
              Signup
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an Account? Login
      </div>
    </Container>
  );
}
export default Signup;
