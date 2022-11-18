import React from 'react'
import Profile from '../assets/profile.jpg'

const Home = () => {
  return (
    <div className='lg:flex lg:flex-row flex flex-col items-center space-y-10 md:space-x-16'>
        <div className='overflow-hidden w-[360px] h-max'>
            <img alt='Profile' src={Profile} className="border-2"/>
        </div>
        <div className='w-full sm:w-max h-max bg-background-white py-[40px] sm:px-[40px] p-5  md:pl-[60px] md:pr-[140px] border-2'>
            <p className='text-lg sm:text-xl md:text-2xl lg:4xl sm:tracking-[1px] font-light'>Hello! I'm <span className='font-normal text-highlight'>Bumi Denpasar</span> , a junior web <br/> developer specializing in <span className='font-normal text-highlight'> full stack</span> <br/> development. </p>
        </div>
    </div>
  )
}

export default Home