import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextAPICounterApplication from './ContextAPICounterApplication.jsx'
import RecoilCounterApplication from './RecoilCounterApplication.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilCounterApplication />
  </StrictMode>,
)
