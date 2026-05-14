import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactRouter from './Router.jsx'
import RouterLink from './RouterLink.jsx'
import RouterUseNavigator from './RouterUseNavigate.jsx'
import RouterRandom from './RouterRandom.jsx'
import RouterLayout from './RouterLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterLayout />
  </StrictMode>,
)
