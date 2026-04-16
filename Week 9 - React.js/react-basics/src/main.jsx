import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SetInterval from './setInterval.jsx'
import ConditionalRendering from './ConditionalRendering.jsx'
import TimerToggle from './TimerToggle.jsx'
import PostComponent from './PostComponent.jsx'
import Props from './Props.jsx'
import ToggleMessage from './ToggleMessage.jsx'
import Notification from './Notification.jsx'
import Counter from './useEffectHook.jsx'
import LinkedinTab from './LinkedinTab.jsx'
import TodoApplication from './FetchAPI.jsx'
import Card from './Card.jsx'
import ListsAndKeys from './TodoApplication.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListsAndKeys />
  </StrictMode>,
)
