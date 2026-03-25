import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SetInterval from './setInterval'
import ConditionalRendering from './ConditionalRendering.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConditionalRendering />
  </StrictMode>,
)
