import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UseCounter from './UseCounter.jsx'
import UseFetch from './UseFetch.jsx'
import UsePostTitle from './UsePostTitle.jsx'
import AdvUseFetch from './AdvUseFetch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdvUseFetch />
  </StrictMode>,
)
