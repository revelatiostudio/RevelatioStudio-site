import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/fonts.css'

import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NextUIProvider } from '@nextui-org/react'
import { PrismicProvider } from '@prismicio/react'
import { client } from './services/prismic.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <PrismicProvider client={client}>
        <Router>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </Router>
      </PrismicProvider>
    </NextUIProvider>

  </StrictMode>,
)
