import React, { useState } from 'react';

const LoginForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://api-servis.onrender.com/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        
      } else {
        setError('Usuario inválido');
      }
    } catch (error) {
      console.error('Error de autenticación:', error);
      setError('Error de autenticación');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
      <button onClick={onRegister}>Registrarse</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;