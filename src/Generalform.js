import React from 'react'
import { useFormik } from 'formik'
import './styles/generalform.css'
import { Link } from 'react-router-dom'
import { basicScheme } from './schemas'
function Generalform() {

    const onSubmit = async (values,actions)=>{
        
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
          });
          actions.resetForm();

    }
   
    const {values, errors,isSubmitting,handleChange, handleSubmit} = useFormik({
        initialValues:{
            email:'',
            age:'',
            password:'',
            repassword:'',
            username:'',
        },
        validationSchema:basicScheme,
        onSubmit,
    })

    

    
  return (
    <div className='Container'>
    <form onSubmit={handleSubmit} className='parentForm' >
        <div className='formContainer'>
            <label>Email</label>
            <input type="email" id='email' onChange={handleChange} value={values.email} placeholder='Email adresinizi girin' className={errors.email ? 'inputError' : ''} />
            {errors.email && <p className='Error'>{errors.email}</p>}
        </div>
        
        <div className='formContainer'>
            <label>Yaş</label>
            <input type="number" value={values.age} onChange={handleChange} placeholder='yaş' id='age' className={errors.age ? 'inputError' : ''} />
            {errors.age && <p className='Error'>{errors.age}</p>}
        </div>
        <div className='formContainer'>
            <label>Kullanici adi</label>
            <input type="text" onChange={handleChange} id='username' value={values.username} placeholder='Kullanıcı adı' className={errors.username ? 'inputError' : ''} />
            {errors.username && <p className='Error'>{errors.username}</p>}
        </div>
        <div className='formContainer'>
            <label>Şifre</label>
            <input type="password" onChange={handleChange} id='password' value={values.password} placeholder='şifre' className={errors.password ? 'inputError' : ''} />
            {errors.password && <p className='Error'>{errors.password}</p>}
        </div>
        <div className='formContainer'>
            <label>Şifre tekrar</label>
            <input type="password" onChange={handleChange} id='repassword' value={values.repassword} placeholder='tekrar şifre' className={errors.repassword ? 'inputError' : ''} />
            {errors.repassword && <p className='Error'>{errors.repassword}</p>}
        </div>
        <button disabled={isSubmitting} type='submit' className='submitButton'>{isSubmitting ? <strong>Gönderiliyor</strong> : <strong>Kaydet</strong>}</button>
        <Link className='portalLink' to={'/port'}>Portala git</Link>

    </form>
    
    </div>
  )
}

export default Generalform