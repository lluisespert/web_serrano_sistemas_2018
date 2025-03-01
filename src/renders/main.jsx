import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../syles/styles.css'
import App from '../aplications/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
