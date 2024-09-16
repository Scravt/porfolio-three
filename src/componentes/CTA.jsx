import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Have a project in mind? <br className='sm:block hidenn'/>
        Let's build someting together!</p>
        <Link to='/contact' className='cta-btn'>Get in touch</Link>
    </section>
  )
}

export default CTA