import { Navigate } from "react-router-dom";

interface RotaPrivadaProps {
  children: React.ReactElement;
  estaAutenticado: boolean;
}

export function RotaPrivada({ children, estaAutenticado }: RotaPrivadaProps) {
  return estaAutenticado ? children : <Navigate to="/login" replace />;
}
