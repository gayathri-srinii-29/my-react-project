import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle login, such as API call
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-10">
      <fieldset className="border p-4 rounded shadow-sm w-100" style={{ maxWidth: '400px' }}>
        <legend className="float-none w-auto px-2">Login</legend>
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </fieldset>
    </div>
  );
}

export default Login;
