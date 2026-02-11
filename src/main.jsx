import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import App from './App.jsx'
import Comp5 from './Components/Comp5.jsx'
import Img from "./assets/img.png"
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    {/* <Comp5
  image={Img}
  title="Dark Chocolate"
  per="10%"
  oldPrice="₹200"
  newPrice="₹180"
  isCounter={true}
/> */}
 </BrowserRouter>
)
