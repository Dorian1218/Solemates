import { Link } from "react-router-dom";
function Login() {
  return (
    <div class="signup-div">
      <div className="formContainer">
        <form onSubmit>
          <input placeholder="username" type="text" />

          <br />

          <input placeholder="email" type="email" />

          <br />

          <input placeholder="password" type="password" />

          <br />

          <button>Signup</button>
          <br />
          <p>
            Dont Have an Account? <Link to="/Auth/Signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
