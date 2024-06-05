import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

// Pages
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Projects from './routes/Projects.jsx'
import Contact from './routes/Contact.jsx'

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
        path: "/portfolio/routes/projects",
        element: <Projects />,
      },
      {
        path: "/portfolio/routes/contact",
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
