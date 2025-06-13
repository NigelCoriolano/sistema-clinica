import React, { useState } from 'react';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui futuramente vamos conectar com a API de autenticação
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 100 }}>
      <h2>Login do Profissional</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: 300 }}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: 10, padding: 8 }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{ marginBottom: 10, padding: 8 }}
        />
        <button type="submit" style={{ padding: 10, backgroundColor: '#007bff', color: 'white', border: 'none' }}>
          Entrar
        </button>
      </form>
    </div>
  );
}
