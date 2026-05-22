import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Bulb from './LightBulb.jsx';
import LightBulbController from './LightBulbDisplay.jsx.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LightBulbController />
  </StrictMode>,
)
