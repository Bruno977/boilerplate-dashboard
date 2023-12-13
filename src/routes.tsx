import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { LayoutAuthenticated } from './Components/Layout/Authenticated';
import { Dashboard } from './pages/Dashboard';
import { Esteira } from './pages/Esteira';
import { Simulacao } from './pages/Simulacao';
import { LayoutAuth } from './Components/Layout/Auth';
import { Login } from './pages/Auth/Login';

export function Routes() {
  return (
    <ReactRoutes>
      {/* Layout Autenticado */}
      <Route element={<LayoutAuthenticated />}>
        <Route element={<Dashboard />} path="/" />
        <Route element={<Esteira />} path="/esteira" />
        <Route element={<Simulacao />} path="/simulacao" />
      </Route>

      {/* Layout Não Autenticado */}
      <Route element={<LayoutAuth />}>
        <Route element={<Login />} path="/login" />
      </Route>
    </ReactRoutes>
  );
}
