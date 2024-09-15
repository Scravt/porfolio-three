import React from 'react'
import { skills } from '../constants/index'

export const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text  font-semibold drop-shadow' >Gonzalo</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Sofware Engineer based in Argentina, with a passion for web development. I have experience in building web applications using modern technologies like React, Node.js, and MongoDB. I'm always looking to learn new things and improve my skills. I'm currently looking for new opportunities to work on exciting projects.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>

          {skills.map((skill, index) => (
            <div key={index} className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl '/>
              <div className='btn-front rounded-xl flex flex-col justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
                <p className='text-slate-500'>{skill.name}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

      <div className='p-16'>
        <h3>Work speriencie</h3>

      </div>

    </section>
  )
}

