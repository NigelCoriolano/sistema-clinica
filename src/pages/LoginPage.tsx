import React from 'react';
import './LoginPage.css';
import logo from '../assets/logo-realinhar.png'; // ✅ Aqui está o import correto da imagem

export default function LoginPage() {
  return (
    <div className="login-container">
      <h2>Login do Profissional</h2>
      <form>
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
      <img
        src={logo}
        alt="Logo Realinhar"
        className="logo"
      />
    </div>
  );
}
