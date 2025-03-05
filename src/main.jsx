import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import useTheme from './hooks/useTheme'

function AppWithTheme() {
  const [theme] = useTheme()

  return <App theme={theme} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWithTheme />
  </StrictMode>,
)
