import React from 'react'
import {useField} from 'formik'

function Portalselect({label,...props}) {
    const [field,meta] = useField(props)
    console.log(field)
    console.log(meta)
    
  return (
    <>
    <label>{label}</label>
    <select {...field} {...props} 
    className={meta.error ? 'inputError' : ''}
    />
    {meta.error && <div className='Error'>{meta.error}</div>}
    </>
  )
}

export default Portalselect