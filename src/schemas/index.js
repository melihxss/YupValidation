import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const basicScheme = yup.object().shape({
    email:yup.string().email('geçerli bir mail adresi giriniz').required('email adresi girmek zorunludur'),
    age: yup.number().required('Yaş girmek zorunludur').positive('Lütfen sadece pozitif sayı giriniz').integer('Tam sayı giriniz')
    ,
    password:yup.string().required('şifre girmek zorunludur').min(5,'lütfen en az 5 karakter giriniz').matches(passwordRules,{
        message:'Lütfen en az 1 büyük harf,1 küçük harf ve 1 sayı giriniz.'
    }),
    repassword: yup.string().required('Lütfen şifreyi tekrar giriniz').oneOf([yup.ref('password')], 'Şifreler eşleşmiyor'),
    username:yup.string().required('Bu alan boş bırakılamaz')
})

export const advancedSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'Kullanıcı adı minunmum 3 karakter uzunluğunda olmadılır')
      .required('Kullanıcı adı zorunludur'),
    university: yup
      .string()
      .oneOf(['bogazici', 'gsu', 'odtü', 'itü'], 'Lütfen üniversitenizi seçiniz')
      .required('Lütfen üniversitenizi seçiniz'),
    isAccepted: yup.boolean().oneOf([true], 'Kullanım koşullarını kabul etmek zorunludur.'),
  });
  