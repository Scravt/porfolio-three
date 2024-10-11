import { Link } from 'react-router-dom'
import { projects } from '../constants/index'
import { arrow } from '../assets/icons'
import CTA from '../componentes/CTA'

export const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, this are my <span className='blue-gradient_text  font-semibold drop-shadow' >Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Sofware Engineer based in Argentina, with a passion for web development. I have experience in building web applications using modern technologies like React, Node.js, and MongoDB. I'm always looking to learn new things and improve my skills. I'm currently looking for new opportunities to work on exciting projects.
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project, index) => (
          <div key={project.name} className='lg:w-[400px] w-full'>
            <div className='block-container w-12 h-12'>
              <div className={`btn-black rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={project.iconUrl} alt="project Icon"
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2 '>
                <Link to={project.link}
                  target='_blanck'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'>
                  View Project
                </Link>
                <img src={arrow} alt="arrow" 
                className='w-4 h-4 object-contain'/>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200'/>
      <CTA/>
    </section>
  )
}
