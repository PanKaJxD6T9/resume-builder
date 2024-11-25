import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignInPage from './auth/sign-in';
import HomePage from './home';
import Dashboard from './dashboard';
import { ClerkProvider } from '@clerk/clerk-react';
import ResumeEdit from './dashboard/resume/[resumeId]/edit';

const publicRoutes = [
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  }
]

const protectedRoutes = [
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/dashboard/resume/:resumeId/edit",
        element: <ResumeEdit />
      }
    ]
  }
]

const router = createBrowserRouter([...publicRoutes, ...protectedRoutes], {
  future: {
    v7_startTransition: true
  }
});

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider 
      appearance={{
        variables: {
          colorText: "#fff",
          colorPrimary: "#0E78F9",
          colorBackground: "#1C1F2E",
          colorInputBackground: "#252A41",
          colorInputText: "#fff",
        },
      }} 
      publishableKey={PUBLISHABLE_KEY}
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)