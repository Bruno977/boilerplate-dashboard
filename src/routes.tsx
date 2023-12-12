import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Esteira } from './pages/Esteira';
import { Simulacao } from './pages/Simulacao';

export function Routes() {
  return (
    <ReactRoutes>
      <Route element={<Layout />}>
        <Route element={<Dashboard />} path="/" />
        <Route element={<Esteira />} path="/esteira" />
        <Route element={<Simulacao />} path="/simulacao" />
      </Route>
    </ReactRoutes>
  );
}
