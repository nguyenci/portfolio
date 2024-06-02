import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter, Routes, Route, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import NavBar from './components/NavBar.jsx'

import '/src/css/index.css'

function Layout() {
  return (
    // using a flex-column container with min size of full screen so header is at bottom of page or further
    <div className="app-container">
      <header>
        <NavBar />
      </header>
      {/* Setting this to flex-1 so it grows to fill out the app-container to fill the page.
      Then padding-top instead of the div you used at the top of each page. */}
      <main className="main-container">
        <Outlet />
      </main>
      <footer className="footer-container">
        <p>Made with ❤️ by Cinthya</p>
      </footer>
    </div>
  );
}

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
        path: "/portfolio/about",
        element: <About />,
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
