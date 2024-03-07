import logo from '../assets/react.svg'
import { useState } from 'react'

const SimpleForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handlerOnSubmit = (e) => {
      e.preventDefault()
    }
  return (
    <div className='login'>
        <div className='login__container'>
          <img src={logo} alt="logo del form" />
          <form onSubmit={handlerOnSubmit}>
            <label htmlFor="email">Email</label>
            <input 
            type="text" 
            name="email"
            placeholder='correo@correo.com'
            id='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
            type="password"
            name="password"
            placeholder='********'
            id='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />      
            <button type='submit'>Iniciar Sesión</button> 

          </form>
          </div>
        </div>
  )
}

export default SimpleForm