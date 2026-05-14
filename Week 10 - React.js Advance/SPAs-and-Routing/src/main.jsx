import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactRouter from './Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactRouter />
  </StrictMode>,
)
