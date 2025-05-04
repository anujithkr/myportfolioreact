import React from 'react'
import myPhoto from '../assets/myphoto.jpg'
function Hero() {
  return (
    <>
    <div className='bg-black text-white text-center py-36'>
        <img className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' src={myPhoto} alt="" />
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Anujith KR</span>
           , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300 '>
        I build full-stack applications that are fast, responsive, and tailored to real user needs.
        </p>
        <div className='mt-8 space-x-4'>
            <a href="#contact"><button className='bg-gradient-to-r from-green-200 to-blue-500 text-white  md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact with me</button></a>
            <a href="/AnujithKRResume.pdf" target='_blank' rel="noopener noreferrer"><button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button></a>
        </div>
    </div>
    </>
  )
}

export default Hero