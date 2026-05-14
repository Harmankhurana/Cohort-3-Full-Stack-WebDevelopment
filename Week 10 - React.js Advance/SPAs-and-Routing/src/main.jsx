import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactRouter from './Router.jsx'
import RouterLink from './RouterLink.jsx'
import RouterUseNavigator from './RouterUseNavigate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterUseNavigator />
  </StrictMode>,
)
