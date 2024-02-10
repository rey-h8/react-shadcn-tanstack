import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import './themes/theme2.css'

// ─── Configure Routes ────────────────────────────────────────────────────────

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// ─── Configure React Query ───────────────────────────────────────────────────

const MAX_RETRIES = import.meta.env.VITE_QUERY_MAX_RETRIES

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Number.POSITIVE_INFINITY,
      retry: MAX_RETRIES,
    },
  },
})

const container = document.getElementById('root')

if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>,
  )
}
