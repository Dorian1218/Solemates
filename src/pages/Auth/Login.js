import { Link } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
function Login() {
  return (
    <Container
      className="d-flex align-items-center"
      style={{ flexDirection: "column" }}
    >
      <Card style={{ maxWidth: "400px", width: "100vw" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form>
            <Form.Group id="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>

            <Form.Group id="ConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" required />
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
