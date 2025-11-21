import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "./contexts/themes";
import Route from './route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Route />
    </ThemeProvider>
  </StrictMode>,
)
