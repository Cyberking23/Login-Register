import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import "./Signup.css";
import SignupValidation from "./SignupValidation";
import axios from 'axios'

export default function Signup() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = SignupValidation(values);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
        axios.post('http://localhost:3000/signup', values)
            .then(res => {
                console.log("Form submitted successfully!", res.data);
                navigate('/');
            })
            .catch(err => console.error("Submission error:", err));
    } else {
        console.log("Form has errors:", validationErrors);
    }
};


  return (
    <div>
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={values.username}
              onChange={handleInput}
              placeholder="Enter Username"
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleInput}
              placeholder="Enter Email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleInput}
              placeholder="Enter Password"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
