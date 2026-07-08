import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import RecoilNavbar from './RecoilNavbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilNavbar />
  </StrictMode>,
)
