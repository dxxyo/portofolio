import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex mt-[40px] space-x-9 tracking-[1px] px-[70px] py-[14px] text-xl border-2 w-max'>
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contactme">Contact me</Link>
    </div>
  )
}

export default Navbar