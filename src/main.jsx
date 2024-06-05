import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

// Pages
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'

// Styles
import '/src/css/index.css'

const router = createBrowserRouter([
  { 
    path: "/portfolio/",
    element: <App />,
    children: [
      {
        path: "/portfolio/",
        element: <Home />,
      },
      {
        path: "/portfolio/pages/about",
        element: <About />,
      },
      {
        path: "/portfolio/pages/projects",
        element: <Projects />,
      },
      {
        path: "/portfolio/pages/contact",
        element: <Contact />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="gradient-background"></div>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
