import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Skills from './Skills'
import Projects from './Projects'
import Navbar from './Navbar'
import ContactMe from './ContactMe'

const Main = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <div className='my-[95px] h-max pb-[150px] lg:pb-0 lg:h-[340px]'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/skills' element={<Skills />}/>
              <Route path='/projects' element={<Projects />}/>
              <Route path='/contactme' element={<ContactMe />}/>
            </Routes>
        </div>
      </Router>
    </div>
  )
}

export default Main