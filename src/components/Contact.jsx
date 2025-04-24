import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div>
         <div className='bg-black text-white py-24' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl  text-center mb-12'>
                Contact Me
            </h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <div className='flex-1'>
                <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
                <p>I'm open to discussing web development projects or partnership opportunities.</p>
                <div className='mb-4'>
                    <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
                    <a href="mailto:anujithkr5@gmail.com" className='hover:underline'>
                        anujithkr5@gmail.com
                    </a>
                </div>
                <div className='mb-4 mt-8'>
                    <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
                    <span>+919744731202</span>
                </div>
                <div className='mb-4 mt-8 '>
                    <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
                    <span>Nilambur,Malappuram,Kerala</span>
                </div>
                </div>
               <div className='flex-1 w-full'>
                    <form className='space-y-4'>
                        <div>
                            <label htmlFor="name" className='block mb-2'>Your Name</label>
                            <input placeholder='Enter Your Name' type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'/>
                        </div>
                        <div>
                            <label htmlFor="email" className='block mb-2'>Email</label>
                            <input placeholder='Enter Your Email' type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'/>
                        </div>
                        <div>
                            <label htmlFor="message" className='block mb-2'>Message</label>
                            <textarea placeholder='Enter Your Message' rows="5" type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'/>
                        </div>
                        <button className='bg-gradient-to-r from-green-200 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Send</button>
                    </form>
               </div>
            </div>
            </div>
            
           </div>
    </div>
  )
}

export default Contact