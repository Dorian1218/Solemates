import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <p1>
        Dont have an account? <Link to="/Auth/Signup">Signup</Link>
      </p1>
    </div>
  );
}

export default Login;
