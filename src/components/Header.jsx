import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between w-full h-max border-2 py-[62px] p-5 md:px-[93px] sm:px-10 border-black'>
        <h1 className='md:text-4xl text-3xl text-head tracking-[1px]'>Bumi denpasar.</h1>
        <h5 className='mt-4 md:text-normal text-sm font-light text-off tracking-[2px]'>Software developer.</h5>
    </div>
  )
}

export default Header