import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import logo from '../assets/react.svg'

const schema = yup
  .object({
    firstName: yup.string().required("Poner el Nombre"),
    lastName: yup.string().required("Poner el Apellido"),
    age: yup.number().positive().integer().required("Poner la Edad"),
    gender: yup.string().required("Poner el Genero"),
    email: yup.string().email().required("Poner el Email"), 
    password: yup.string().min(8).max(20).required("Poner el Password"),
  })
  .required()

const ReactHookForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
      console.log(data)
    }
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form
          onSubmit={handleSubmit(onSubmit)}           
          style={{ display: 'flex', flexDirection: 'column' }}
        >
        
          <label htmlFor='firstName'>Nombre</label>
          <input
            type='text'
            name='firstName'
            placeholder='Tu Nombre'
            id='firstName'
            {...register('firstName', { required: true })}
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}

          <label htmlFor='lastName'>Apellido</label>
          <input
            type='text'
            name='lastName'
            placeholder='Tu Apellido'
            id='lastName'
            {...register('lastName', { required: true })}
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}

          <label htmlFor='age'>Edad</label>
          <input
            type='number'
            name='age'
            placeholder='Tu Edad'
            id='age'
            {...register('age', { required: true })}
          />
          {errors.age && <span>{errors.age.message}</span>}

          <label htmlFor='gender'>Genero</label>
          <select name='gender' id='gender'
          {...register('gender')}>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Prefiero no decir</option>
          </select>
          {errors.gender && <span>{errors.gender.message}</span>}

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
            {...register('email', { required: true })}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='********'
            {...register('password', { required: true })}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReactHookForm