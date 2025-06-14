import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { AgendaPage } from '../pages/AgendaPage';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Redirecionar da raiz para o login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/agenda" element={<AgendaPage />} />
      </Routes>
    </Router>
  );
}
