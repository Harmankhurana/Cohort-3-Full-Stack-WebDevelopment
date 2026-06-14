import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UseCounter from './UseCounter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseCounter />
  </StrictMode>,
)
