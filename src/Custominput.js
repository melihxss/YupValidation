import React from 'react'
import {useField} from 'formik'

function Custominput({label,...props}) {
    const [field,meta] = useField(props)
   
  return (
    <>
    <label>{label}</label>
    <input {...field} {...props} 
    className={meta.error ? 'inputError' : ''}
    />
    {meta.error && <div className='Error'>{meta.error}</div>}
    </>
  )
}

export default Custominput