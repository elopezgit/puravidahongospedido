import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ClientHome from './pages/ClientHome';
import AdminDashboard from './pages/AdminDashboard';
import { CartProvider } from './lib/CartContext';
import { ToastProvider } from './hooks/useToast';

/**
 * Tenant por defecto de ESTE repo (la raíz `/` redirige acá):
 * Pura Vida Hongos — Hongos Medicinales & Adaptógenos
 */
export const DEFAULT_TENANT = 'puravidahongos';

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          {/* Raíz → tenant por defecto del repo */}
          <Route path="/" element={<Navigate to={`/${DEFAULT_TENANT}`} replace />} />
          
          {/* Rutas Multi-Tenant (segmentadas por empresa) */}
          <Route path="/:empresaSlug" element={
            <CartProvider>
              <ClientHome />
            </CartProvider>
          } />
          <Route path="/admin/:empresaSlug" element={
            <CartProvider>
              <AdminDashboard />
            </CartProvider>
          } />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
