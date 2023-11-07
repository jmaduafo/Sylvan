import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Toast from '../components/Toast'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import LoadingSmall from '../components/LoadingSmall'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ message, setMessage ] = useState('')
  const [ messageType, setMessageType ] = useState('')

  const [ loading, setLoading ] = useState(false)

  let navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    if (!email.length || !password.length) {
      setMessage('All entries must not be left empty')
    } else {
      setLoading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user

        localStorage.setItem('loggedIn', user.uid)
        setLoading(false)
        navigate('/')
    })
    .catch((error) => {
        setLoading(false)
        console.log(error)
        setMessageType('Error message')
        setMessage('You are not a registered user. Please sign up.')
        
    });
    }
  }

  return (
    <section className='w-full h-[85vh] flex justify-center items-center'>
      <Toast messageType={messageType} setMessage={setMessage} message={message}/>
      <div className='text-center w-[35%]'>
        <h3 className='text-[40px] font-semibold text-sienna font-serif'>LOG IN</h3>
        <form onSubmit={handleSubmit} className='mt-5 flex flex-col'>
          <input onChange={(e) => setEmail(e.target.value)} value={email} id='loginEmail' type='email' placeholder='Email' 
          className='font-light font-sans px-3 py-[3px] outline-none text-[#9b4e17b2] border-b-sienna bg-transparent border-b-[1.5px]'/>
          <input onChange={(e) => setPassword(e.target.value)} value={password} id='loginPassword' type='password' placeholder='Password' 
          className='font-light font-sans mt-4 px-3 py-[3px] outline-none text-[#9b4e17b2] border-b-sienna bg-transparent border-b-[1.5px]'/>
          <button type='submit' className='mt-5 py-2 rounded-lg bg-olive text-cream sm:text-[18px] text-[15px] w-full uppercase text-center font-light'>{loading ? <LoadingSmall/> : 'Log in'}</button>
        </form>
        <Link to='/register'>
          <div className='group hover:bg-[#9b4e17b2] duration-[.4s] mt-2 py-2 flex justify-center gap-2 border-sienna border-[1px] text-[#9b4e17c4]'>
            <p className='group-hover:text-cream text-[13px] font-light uppercase'>Switch to register</p>
          </div>
        </Link>
      </div>
    </section>  
  )
}

export default Login