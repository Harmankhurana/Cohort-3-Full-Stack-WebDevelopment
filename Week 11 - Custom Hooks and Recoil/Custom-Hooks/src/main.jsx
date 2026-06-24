import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UseCounter from './UseCounter.jsx'
import UseFetch from './UseFetch.jsx'
import UsePostTitle from './UsePostTitle.jsx'
import AdvUseFetch from './AdvUseFetch.jsx'
import MoreAdvUseFetch from './MoreAdvUseFetch.jsx'
import UsePrev from './UsePrev.jsx'
import UseDebounce from './UseDebounce.jsx'
import MoreAdvUseDebounce from './MoreAdvUseDebounce.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoreAdvUseDebounce />
  </StrictMode>,
)
