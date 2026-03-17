const Login = () => {
  const login = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Here you can add your authentication logic, such as making an API call to verify the user's credentials.
    // For demonstration purposes, we'll just log the username and password to the console.
    console.log('Username:', username);
    console.log('Password:', password);

    // After successful login, you can redirect the user to the homepage or profile page.
    // For example, you can use the useNavigate hook from react-router-dom to navigate programmatically.

    if(username === 'admin' && password === 'password') {
      window.location.href = '/homepage'; // Redirect to homepage after successful login
    }
  }
  return (
    <div>
        <form onSubmit={login}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required/>
            <br />
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" name="password" required/>
            <br />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login