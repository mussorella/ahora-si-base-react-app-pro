import {  useFormik } from "formik";
import * as Yup from "yup";
import '../styles/styles.css'




export const FormikYupPage = () => {
  

    


  const {handleChange,values,handleSubmit,
    errors,touched, handleBlur, getFieldProps}= 
    useFormik({//estructura basica de formik, estamos desestructurando de ahi las funciones q usamos en el form
    initialValues:{
        firstName:'',
        lastName:'',
        email:'',

    },
    onSubmit: (values)=>{
        console.log(values)
    }, 
    validationSchema:Yup.object({
        firstName: Yup.string()
                        .max(15,'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
        lastName: Yup.string()
                        .max(10,'Debe de tener palabras 10 o menos')
                        .required('Requerido'),
        email: Yup.string()
                    .email('El correo no tiene formato valido')
                    .required('Requerido')    
                })
  })
  
    return (
    <div>
        <h1>Formik yup </h1>

        <form onSubmit={handleSubmit} noValidate>
        
        
        
        <label htmlFor="firstName">First Name</label>
        <input 
                type="text"
                {...getFieldProps('firstName')}
        />
        
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        
        <label htmlFor="lastName">Last Name</label>
        <input  
                type="text"
                name='lastName' 
                onBlur={handleBlur}//el onblur es para cuando ahce foco ahi se activa el onchange y tira el error o no
                onChange={handleChange}//esto te ahorra lo de ev=onchange(ev) y todo eso
                value={values.lastName}//deje todo asi para ver, pero en realidad va get field props
        />
        
        {touched.lastName && errors.lastName &&<span>{errors.lastName}</span>}
        
        <label htmlFor="email">Email Adress</label>
        <input 
                type="email"
                {...getFieldProps('email')}
        />
        
        {touched.email && errors.email &&<span>{errors.email}</span>}
        

        <button type='submit'>Submit</button>



        </form>



    </div>
  )
}
