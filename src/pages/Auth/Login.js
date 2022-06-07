import { Link, useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { UserAuth } from "/src/AuthContext";
import { useState } from "react";
function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");

  const { login } = UserAuth();
  const navigate = useNavigate();

  let variantBtn = "primary";

  let non = false;

  if (email === "" || password === "") {
    non = true;
    variantBtn = "secondary";
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      if (e.message === "Firebase: Error (auth/user-not-found).") {
        setError("Account does not exist");
      } else if (e.message === "Firebase: Error (auth/wrong-password).") {
        setError("Password does not match email");
      } else if (
        e.message ===
        "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
      ) {
        setError(
          "Account temporarly locked for too many failed login attempts"
        );
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
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
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
            <Button
              variant={variantBtn}
              size="sm"
              className="w-100 mt-2"
              type="submit"
              style={{ height: "38px" }}
              disabled={non}
            >
              Login
            </Button>
            <p></p>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <p1>
          Dont have an Account? <Link to="/Auth/Signup">Signup</Link>
        </p1>
      </div>
    </Container>
  );
}

export default Login;
