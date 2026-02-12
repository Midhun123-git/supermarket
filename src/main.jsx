import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import App from './App.jsx'
import Comp5 from './Components/Comp5.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
   
 </BrowserRouter>
)
