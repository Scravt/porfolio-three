import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import Fox from '../models/Fox'
import { Loader } from '../componentes/Loader'

export const Contact = () => {
  const FormRef = useRef(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, , , setisLoading, ,] = useState(false)
  const [currentAnimation, setcurrentAnimation] = useState('idle')

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setisLoading(true)
    setcurrentAnimation('hit')
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
        setisLoading(false)
        setTimeout(() => {
          setcurrentAnimation('idle')

          setForm({
            name: '',
            email: '',
            message: ''
          })
        }, 3000)




      }).catch((error) => {
        setcurrentAnimation('idle')
        setisLoading(false)
        console.error('An error occurred, Please try again later', error)
      })
  }
  const handleFocus = () => { setisLoading('walk') }
  const handleReset = () => { setcurrentAnimation('idle') }
  const handleBlur = () => { }


  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          ref={FormRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={isLoading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 10],
            fov: 75,
            near: 0.1,
            far: 10000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[Math.PI / 4, Math.PI / 6, 0]} // Rotar en diagonal
              scale={[0.2, 0.2, 0.2]} // Escala ajustada
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}
