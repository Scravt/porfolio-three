import React, { useState } from 'react'

export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = () => { }
  const handleFocus = () => { }
  const handleReset = () => { }
  const handleBlur = () => { }

  return (
    <section className='relative flex lg:flex-row flex-col max-container' >
      <div className='flex-1 min-min-w[50% flex flex- conl '>
        <h1 className='head-text'> Get in touch</h1>
      </div>

      <form className='w-full flex flex-col gap-7 mt-14' >
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


      </form>

    </section>
  )
}
