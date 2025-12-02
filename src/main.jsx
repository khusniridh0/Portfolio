import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AllProvider } from "./contexts/all-context.jsx";
import Route from './route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllProvider>
      <Route />
    </AllProvider>
  </StrictMode>,
)
