import React from 'react'
import AboutMe from '../assets/myphoto.jpg'
function About() {
  return (
   <>
   <div className='bg-black text-white py-26' id='about'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
    <h2 className='text-4xl text-bold text-center mb-12'>
        About Me
    </h2>
    <div className='flex flex-col md:flex-row items-center md:space-x-12'>
        <img className='w-72 h-80 rounded object-cover mb-8 md:mb-0' src={AboutMe} alt="" />
        <div className='flex-1'>
        <p className='text-lg mb-8'>
        I’m a MERN Stack Developer with experience in building full-stack web applications 
        using MongoDB, Express.js, React.js, and Node.js. I enjoy creating user-friendly websites
         and powerful backends that work smoothly together. I focus on writing clean code, building secure APIs,
          and designing responsive interfaces. I also have experience with tools like Git, Postman, and cloud platforms
           like Heroku and Vercel. I love solving problems and learning new things to build better web experiences.
        </p>
        <div className='space-y-4'>
            <div className='flex items-center'>
                <label className='w-2/12' htmlFor="htmlandcss">HTML & CSS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                    transform transition-transform duration-300 hover:scale-105 w-11/12'>

                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <label className='w-2/12' htmlFor="htmlandcss">REACT JS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                    transform transition-transform duration-300 hover:scale-105 w-10/12'>

                    </div>
                </div>
            </div>
             <div className='flex items-center'>
                <label className='w-2/12' htmlFor="htmlandcss">NODE JS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                    transform transition-transform duration-300 hover:scale-105 w-9/12'>

                    </div>
                </div>
            </div>
        </div>
        <div className='mt-12 flex justify-between text-center'>
            <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    6+
                </h3>
                <p>
                    Months experience
                </p>
            </div>
            <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    10+ 
                </h3>
                <p>
                    Projects completed
                </p>
            </div>
            <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    3+
                </h3>
                <p>
                    Clone sites
                </p>
            </div>
        </div>
        </div>
       
    </div>
    </div>
    
   </div>
   </>
  )
}

export default About