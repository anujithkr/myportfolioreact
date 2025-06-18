import React from 'react'
import hotel from '../assets/food.png'
import eKart from '../assets/ekart.png'
import media from '../assets/media.png'
import quote from '../assets/quote.png'
import zomato from '../assets/zomato.png'
import counter from '../assets/counter.png'
const projects=[
    {
        id:1,
        name:"E-Kart app",
        technologies:"MERN Stack",
        image:eKart,
        netlify:"https://e-cartapi.netlify.app/",
    },
    {
        id:2,
        name:"Restaurant app",
        technologies:"MERN Stack",
        image:hotel,
        netlify:"https://restuarantappbyanujith.netlify.app/",
    },,
    {
        id:3,
        name:"Media app",
        technologies:"MERN Stack",
        image:media,
        netlify:"https://mediaplayerreact.netlify.app/",
    },
    {
        id:4,
        name:"Random Quote",
        technologies:"MERN Stack",
        image:quote,
        netlify:"https://randmquotegntr.netlify.app/",
    },
      {
        id:5,
        name:"Counter App",
        technologies:"MERN Stack",
        image:counter,
        netlify:"https://counterpplication.netlify.app/",
    },
    {
        id:6,
        name:"Zomato clone",
        technologies:"MERN Stack",
        image:zomato,
        netlify:"https://zomatoonlyclone.netlify.app/",
    }
    
]


function Projects() {
  return (
    <div className='bg-black text-white py-26' id='project'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
    <h2 className='text-4xl text-bold text-center mb-12'>
       My Projects
    </h2>
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map(project=>(
            <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover' />
                <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                <p className='text-gray-400 mb-4 '>{project.technologies}</p>
                <a href={project.netlify} target='_blank' rel='noopener noreferrer' className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full'>Netlify</a>
            </div>
        ))}
    </div>
    </div>
    </div>
  )
}

export default Projects