import { useState } from 'react';
import './LoginPage.css';
import { login } from '../services/authService';
import logo from '../assets/logo-realinhar.png';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(email, senha);
      navigate('/agenda');
    } catch (error: any) {
      alert(error.message || 'Erro ao fazer login');
    }
  };

  return (
    <div className="login-container">
      <h2>Login do Profissional</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-3"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-6"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Entrar
        </button>
      </form>
      <img src={logo} alt="Logo da Clínica" className="logo" />
    </div>
  );
}
