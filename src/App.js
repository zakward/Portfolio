import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import {Routes, Route} from "react-router-dom"
import AboutMe from "./components/AboutMe"
import Campfire from "./components/Campfire"

import "./index.css"

function App() {

  


  return (
    <>
    <Navbar />

    
    <Routes> 
      <Route path = "/" element = {<Home />  }  />
      <Route path = "/projects" element = {<Projects /> } />  
      <Route path = "/about-me" element = {<AboutMe /> }  />  
      <Route path = "/campfire" element = {<Campfire />} />
    </Routes>
    
    

    </>
  )
}

export default App