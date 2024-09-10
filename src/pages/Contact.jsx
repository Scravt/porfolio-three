import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Fox from '../models/Fox'
import Loader from '../componentes/Loader'

export const Contact = () => {
  const FormRef = useRef(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Gonzalo",
          from_email: form.email,
          to_email: "34680110ax@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ).then(() => {
        setIsLoading(false)
        setForm({
          name: '',
          email: '',
          message: ''
        })
       
      }).catch((error) => {
        setIsLoading(false)
        console.error('An error occurred, Please try again later', error)
      })
    }
    const handleFocus = () => { }
    const handleReset = () => { }
    const handleBlur = () => { }


    return (
      <section className='relative flex lg:flex-row flex-col max-container' >
        <div className='flex-1 min-min-w[50% flex flex- conl '>
          <h1 className='head-text'> Get in touch</h1>
        </div>

        <form className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold' >
            Name
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className='input'
              placeholder='Juan Perez'
            >
            </input>
          </label>
          <label className='text-black-500 font-semibold' >
            Email
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className='input'
              placeholder='juanPerez@gmail.com'
            >
            </input>
          </label>
          <label className='text-black-500 font-semibold' >
            Message
            <textarea
              rows={4}
              name='message'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className='textarea'
              placeholder='Let me know how I can help you!'>
            </textarea>
          </label>

          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Loading...' : 'Send'}
          </button>
        </form>
      </section>
    )
  }
