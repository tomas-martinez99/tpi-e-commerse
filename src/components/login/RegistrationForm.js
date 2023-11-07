import React, { useState } from 'react';

function RegistrationForm () {
  const [userData, setUserData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    contraseña: '',
    direccion: '',
    numeroCalle: '',
    ciudad: '',
    provincia: '',
  });

  const handleRegister = async () => {
    try {
      const response = await fetch('https://api-servis.onrender.com/users/register', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // Registro exitoso, puedes redirigir al usuario o realizar otras acciones
        console.log('Registro exitoso');
      } else {
        // Manejo errores de registro
        console.error('Error en el registro');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };
  return (
    <div>
      <h2>Registro de Usuario</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dirección"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
};

export default RegistrationForm;