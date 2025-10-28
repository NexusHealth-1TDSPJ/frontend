import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'
import Sobre from './routes/Sobre/index.tsx'
import Servicos from './routes/Servicos/index.tsx'
import Perguntas from './routes/Perguntas/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import Contato from './routes/Contato/index.tsx'
import Login from './routes/login/index.tsx'



const router = createBrowserRouter([
  {
    path:"/", element: <App/>, errorElement: <Error/>, children:[
      {path:"/", element: <Home/>},
      {path: "/sobre", element: <Sobre/>},
      {path:"/servicos", element: <Servicos/>},
      {path:"/perguntas", element: <Perguntas/>},
      {path:"/integrantes", element:<Integrantes/>},
      {path:"/contato", element:<Contato/>},
      {path:"/login", element:<Login/>}
    ]
  } 
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
