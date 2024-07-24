import React from 'react'
import {useField} from 'formik'

function Portalcheckbox({...props}) {
    const [field,meta] = useField(props)
   
  return (
    <>
    <div className='checkBox'><input {...field} {...props} 
    className={meta.error ? 'inputError' : ''}
    />
    <p>Kullanım koşullarını kabul edin.</p>
    {meta.error && <div className='Error'>{meta.error}</div>}</div>
    
    </>
  )
}

export default Portalcheckbox