import React from 'react'
import {Routes,Route} from "react-router-dom"
import Header from './Components/Header'
import Comp1 from './Components/Comp1'
import Comp2 from './Components/Comp2'
import Comp3 from './Components/Comp3'
import Comp4 from './Components/Comp4'
import Comp5 from './Components/Comp5'
import Footer from './Components/Footer'
import Homepage from './Pages/Homepage'
import Comp6 from './Components/Comp6'
const App = () => {
  return (
   <Routes> 
<Route path="/Header"  element={<Header/>}/>
<Route path="/Comp1"  element={<Comp1/>}/>
<Route path="/Comp6"  element={<Comp6/>}/>
<Route path="/Comp2"  element={<Comp2/>}/>
<Route path="/Comp3"  element={<Comp3/>}/>
<Route path="/Comp4"  element={<Comp4/>}/>
<Route path="/Comp5"  element={<Comp5/>}/>
<Route path="/Footer"  element={<Footer/>}/>
<Route path="/"  element={<Homepage/>}/>



   </Routes>
  )
}

export default App