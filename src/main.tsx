import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routerApp } from './routes/routerBobocha'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routerApp}/>
  </StrictMode>,
)
