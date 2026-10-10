import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function fitToScreen() {
  const width = window.innerWidth
  document.documentElement.style.zoom = width >= 1280 && width < 1920 ? width / 1920 : ''
}

fitToScreen()
window.addEventListener('resize', fitToScreen)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
