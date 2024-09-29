import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import validation from "./LoginValidation";
import axios from 'axios'

export default function Login() {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);
    
    // Verifica si no hay errores de validación antes de hacer la solicitud
    if (Object.keys(validationErrors).length === 0) {
        axios.post('http://localhost:3000/login', values)
            .then(res => {
                if (res.data === "Success") {
                    navigate('/');
                } else {
                    alert("No record exists");
                }
            })
            .catch(err => {
                console.log(err); // Corrige el error de consola aquí
            });
    }
};


  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div className="register-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              name="email" 
              onChange={handleInput} 
              placeholder="Enter Email" 
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              onChange={handleInput} 
              placeholder="Enter Password" 
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <button type="submit" className="register-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
