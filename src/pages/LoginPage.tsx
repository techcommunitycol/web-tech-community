import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const USER = 'admin';
const PASS = 'admin123';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === USER && password === PASS) {
      localStorage.setItem('adminSession', 'true');
      navigate('/admin');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
  <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xs border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center tracking-tight">Acceso Administrador</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full mb-4 p-3 border border-primary/60 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary bg-white text-gray-900 placeholder-gray-400 font-medium transition"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border border-primary/60 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary bg-white text-gray-900 placeholder-gray-400 font-medium transition"
        />
        {error && <div className="text-red-500 mb-2 text-sm text-center font-semibold">{error}</div>}
        <button
          type="submit"
          className={`w-full py-2 rounded-lg font-semibold shadow transition text-lg ${username && password ? 'bg-primary hover:bg-primary/80 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          disabled={!username || !password}
        >Entrar</button>
      </form>
    </div>
  );
}
