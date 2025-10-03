import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import IndexPage from './pages/IndexPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IndexPage />
  </StrictMode>,
)
