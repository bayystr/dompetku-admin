import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Login Admin</h1>
      <form>
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
