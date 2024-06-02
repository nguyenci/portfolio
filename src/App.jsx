/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

import '/src/css/App.css'
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <>
    <Outlet />
    </>
  )
}

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

export default App