import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Bulb from './LightBulb.jsx';
import LightBulbController from './LightBulbDisplay.jsx.jsx';
import PropDrilling from './PropDrilling.jsx'
import ContextAPI from './ContextAPI.jsx';
import CountContext from './CountContext.jsx';
import BulbContextProvider from './BulbProvider.jsx';
import CountContextProvider from './CountContextProvider.jsx';
import Recoil from './Recoil.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Recoil />
  </StrictMode>,
)
