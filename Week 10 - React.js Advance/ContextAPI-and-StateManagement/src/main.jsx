import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Bulb from './LightBulb.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bulb />
  </StrictMode>,
)
