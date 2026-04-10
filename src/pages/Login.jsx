import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';
import { authenticateWithGoogle } from '../hooks/authWithGoogle';

const Login = () => {
  const navigate = useNavigate();

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User logged in: ", user);
      navigate('/user/dashboard'); // Redirect to dashboard after successful login
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Login error: ", errorCode, errorMessage);
      alert("Login failed: " + errorMessage); // Show an alert on login failure
    });
  }
  return (
    <div>
        <form onSubmit={login}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <br />
            <button type="submit">Login</button>
        </form>
        <button onClick={() => authenticateWithGoogle(navigate)}>Login with Google</button>
    </div>
  )
}

export default Login