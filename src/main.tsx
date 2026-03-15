import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routerApp } from './routes/routerBobocha'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routerApp} />
      </QueryClientProvider>
    </StrictMode>
  </>
)
