import "./Signup.css";
export default function Login() {
  return (
    <div>
      <div className="register-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input type="text" id="username" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
