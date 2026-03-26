import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SetInterval from './setInterval.jsx'
import ConditionalRendering from './ConditionalRendering.jsx'
import TimerToggle from './TimerToggle.jsx'
import PostComponent from './PostComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostComponent />
  </StrictMode>,
)
