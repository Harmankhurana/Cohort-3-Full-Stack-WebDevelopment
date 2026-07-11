import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AxiosFetch from './Axios.Fetch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AxiosFetch />
  </StrictMode>,
)
