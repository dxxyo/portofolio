import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [home, setHome] = React.useState(false)
  const [skill, setSkill] = React.useState(false)
  const [projects, setProjects] = React.useState(false)
  const [contact, setContact] = React.useState(false)

  return (
    <div className='w-full flex flex-col items-center lg:items-start'>
      <div className='flex mt-[40px] space-x-9 tracking-[1px] px-[70px] py-[14px] text-xl border-2 w-max'>
        <motion.div onClick={() => {setHome(true); setSkill(false); setProjects(false); setContact(false)}} animate={{y: home ? 5 : 0}}>
          <Link to="/" className={'hover:scale-105 hover:text-highlight ease-linear duration-200 ' + (home ? 'text-highlight' : '')}>Home</Link>
        </motion.div>
        <motion.div onClick={() => {setHome(false); setSkill(true); setProjects(false); setContact(false)}} animate={{y: skill ? 5 : 0}}>
          <Link to="/skills" className={'hover:scale-105 hover:text-highlight ease-linear duration-200 ' + (skill ? 'text-highlight' : '')}>Skills</Link>
        </motion.div>
        <motion.div onClick={() => {setHome(false); setSkill(false); setProjects(true); setContact(false)}} animate={{y: projects ? 5 : 0}}>
          <Link to="/projects" className={'hover:scale-105 hover:text-highlight ease-linear duration-200 ' + (projects ? 'text-highlight' : '')}>Projects</Link>
        </motion.div>
        <motion.div onClick={() => {setHome(false); setSkill(false); setProjects(false); setContact(true)}} animate={{y: contact ? 5 : 0}}>
          <Link to="/contactme" className={'hover:scale-105 hover:text-highlight ease-linear duration-200 ' + (contact ? 'text-highlight' : '')}>Contact me</Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar