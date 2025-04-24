import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Anujith</div>
        <div className='space-x-6'>
            <a href="#home" className='px-4 py-2 text-white-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:rounded-full hover:shadow-lg transition-all duration-300'>Home</a>
            <a href="#about" className='px-4 py-2 text-white-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:rounded-full hover:shadow-lg transition-all duration-300'>About</a>
            <a href="#service" className='px-4 py-2 text-white-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:rounded-full hover:shadow-lg transition-all duration-300'>Services</a>
            <a href="#project" className='px-4 py-2 text-white-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:rounded-full hover:shadow-lg transition-all duration-300'>Projects</a>
            <a href="#contact" className='px-4 py-2 text-white-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:rounded-full hover:shadow-lg transition-all duration-300'>Contact</a>
        </div>
        <a href="#contact"><button className='bg-gradient-to-r from-blue-500 to-green-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button></a>
        </div>
        
    </nav>
    </>
  )
}

export default Navbar