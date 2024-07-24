import React from 'react';
import { Form, Formik } from 'formik';
import CustomInput from './Custominput';
import { advancedSchema } from './schemas';
import './styles/generalform.css'
import Portalselect from './Portalselect';
import Portalcheckbox from './Portalcheckbox';
import {Link} from 'react-router-dom'

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <div className='divContainer'>
      {' '}
      <Formik
        initialValues={{ username: '', university: '', isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({isSubmitting}) => (
          <Form style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <CustomInput
              label="Kullancı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
            <Portalselect  label="Okulunuz"
              name="university"
              type="select"
             >
              <option value="">Lütfen Bir Üniversite Seçiniz</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="gsu">Galatasaray Üniversitesi</option>
              <option value="odtü">ODTÜ</option>
              <option value="itü">İTÜ</option>
              
             </Portalselect>
             <Portalcheckbox type='checkbox' name="isAccepted" />
          
            <button disabled={isSubmitting} className='submitButton'>Kaydet</button>

          </Form>
        )}
        
      </Formik>
      <Link className='portalLink' to={'/'}>Generalform</Link>
      </div>
  );
}

export default PortalForm;
