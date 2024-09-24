import "./Signup.css";
export default function Signup() {
  return (
    <div>
      <div className="register-container">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter Username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Email" />
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
