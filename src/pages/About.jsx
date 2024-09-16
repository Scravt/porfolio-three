import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants/index'
import CTA from '../componentes/CTA';

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
              <div className='btn-back rounded-xl ' />
              <div className='btn-front rounded-xl flex flex-col justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
                <p className='text-slate-500'>{skill.name}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

      <div className='p-16'>
        <h3>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>I've  worked as a freelance developer for the past 2 years. I've built web applications for clients using React, Node.js, and MongoDB. I've also worked on personal projects to improve my skills and learn new technologies. I'm always looking for new opportunities to work on exciting projects and collaborate with other developers.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement 
                key={experience.company_name}
                icon={
                  <div className='flex justify-center items-center w-full h-full'> 
                    <img src={experience.icon} alt={experience.company_name} 
                    className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom:'8px',
                  borderStyle:'solid',
                  borderBottomColor:experience.iconBg,
                  boxShadow: 'none'                 
                }}
                iconStyle={{
                  background: experience.iconBg,
                }}
                >

                <div>
                  <h3 className='text-black text-xl font-semibold '>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base'
                    style={{
                      margin: 0
                    }}>
                    {experience.company_name}
                  </p>
                  <ul className='my-5 list-disc space-y-2'>
                    {experience.points.map((item, index) => (
                      <li key={`experience-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200'/>
      <CTA />

    </section>
  )
}

