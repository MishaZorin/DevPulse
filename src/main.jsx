import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WidgetProvider } from './Context'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <BrowserRouter>
      <WidgetProvider> 
        <App />
      </WidgetProvider>
    </BrowserRouter>
  </StrictMode>
)