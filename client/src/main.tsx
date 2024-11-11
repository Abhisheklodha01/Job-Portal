import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import AppWraper from './modules/AppWraper.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWraper />
    <Toaster />
  </StrictMode>,
)
