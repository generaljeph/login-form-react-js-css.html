import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Login from './components/Login'
import {  BrowserRouter as Router, Routes ,Route,} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/about'
import Login from './components/Login'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    
   
    <Router>
      < Navbar/>
      <Routes>
        <Route path='/' element={ <Login />}></Route>
        <Route path='/home' element={ < Home />}></Route>
        <Route path='/about' element={ < About />}></Route>
        <Route path='/Contact' element={ < Contact />}></Route>
      </Routes>
    </Router>
    
  )
}

export default App
