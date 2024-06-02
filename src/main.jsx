import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.jsx'

import '/src/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={"/portfolio"}>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
)
