import { StrictMode} from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/index.tsx";
import Error from "./routes/Error/index.tsx";
import Sobre from "./routes/Sobre/index.tsx";
import Servicos from "./routes/Servicos/index.tsx";
import Perguntas from "./routes/Perguntas/index.tsx";
import Integrantes from "./routes/Integrantes/index.tsx";
import Login from "./routes/Login/index.tsx";
import Cadastro from "./routes/Cadastro/index.tsx";
import { Navigate } from "react-router-dom";
// @ts-ignore
import "./globals.css";

interface RotaPrivadaProps {
  children: React.ReactElement;
}

function RotaPrivada({ children }: RotaPrivadaProps) {
  const token = localStorage.getItem("token"); // corrigir na hora de usar com o java
  return token ? children : <Navigate to="/login" replace />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <RotaPrivada>
            <Home />
          </RotaPrivada>
        ),
      },
      {
        path: "/sobre",
        element: (
          <RotaPrivada>
            <Sobre />
          </RotaPrivada>
        ),
      },
      {
        path: "/servicos",
        element: (
          <RotaPrivada>
            <Servicos />
          </RotaPrivada>
        ),
      },
      {
        path: "/perguntas",
        element: (
          <RotaPrivada>
            <Perguntas />
          </RotaPrivada>
        ),
      },
      {
        path: "/integrantes",
        element: (
          <RotaPrivada>
            <Integrantes />
          </RotaPrivada>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/cadastro", element: <Cadastro /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);