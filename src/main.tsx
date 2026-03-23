import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { routerApp } from './routes/routerBobocha'
import './index.css'

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
