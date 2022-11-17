import React from 'react'
import Profile from '../assets/profile.jpg'

const Home = () => {
  return (
    <div className='flex space-x-16'>
        <div className='overflow-hidden w-[360px] h-max'>
            <img alt='Profile' src={Profile} className="border-2"/>
        </div>
        <div className='w-max h-max bg-background-white py-[40px] pl-[60px] pr-[140px] border-2'>
            <p className='text-4xl tracking-[1px] font-light'>Hello! I'm <span className='font-normal text-highlight'>Bumi Denpasar</span> , a junior web <br/> developer specializing in <span className='font-normal text-highlight'> full stack</span> <br/> development. </p>
        </div>
    </div>
  )
}

export default Home