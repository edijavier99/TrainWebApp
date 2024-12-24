import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout/layout'
import { ModalProvider } from './context/ModalContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <Layout />
    </ModalProvider>
  </StrictMode>,
)
