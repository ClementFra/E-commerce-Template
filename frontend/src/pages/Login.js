import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('/api/users/login', { email, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/forum";
      });
  };

  return (
    <div>
      <h2>Connexion Employé</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Mot de passe" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
}
export default Login;