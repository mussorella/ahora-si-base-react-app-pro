import { FormikErrors, useFormik } from "formik";

import '../styles/styles.css'

interface formValues{
    firstName: string;
    lastName: string;
    email: string;
}


export const FormikBasicPage = () => {
  

    const validate=({firstName,lastName,email}:formValues)=>{

        const errors:FormikErrors<formValues>={}//aca estoy suando el formik mandandole los datos de la interface de arriba


            if( !firstName ){
                errors.firstName='First Name is Required'
            }else if(firstName.length>15){
                errors.firstName='Must be 15 characters or less'
            }

            if( !lastName ){
                errors.lastName='Last Name is Required'
            }else if(lastName.length>10){
                errors.lastName='Must be 15 characters or less'
            }
            
            if (!email) {
                errors.email = 'email is Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
                errors.email = 'Invalid email address';
              }




        

        return errors;

    }


  const {handleChange,values,handleSubmit,errors,touched, handleBlur}= useFormik({//estructura basica de formik, estamos desestructurando de ahi las funciones q usamos en el form
    initialValues:{
        firstName:'',
        lastName:'',
        email:'',

    },
    onSubmit: (values)=>{
        console.log(values)
    }, 
    validate
  })
  
    return (
    <div>
        <h1>Formik basic tutorial</h1>

        <form onSubmit={handleSubmit} noValidate>
        
        
        
        <label htmlFor="firstName">First Name</label>
        <input type="text"
                name='firstName' 
                onBlur={handleBlur}
                onChange={handleChange}//esto te ahorra lo de ev=onchange(ev) y todo eso
                value={values.firstName}
        />
        
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        
        <label htmlFor="lastName">Last Name</label>
        <input type="text"
                name='lastName' 
                onBlur={handleBlur}//el onblur es para cuando ahce foco ahi se activa el onchange y tira el error o no
                onChange={handleChange}
                value={values.lastName}
        />
        
        {touched.lastName && errors.lastName &&<span>{errors.lastName}</span>}
        
        <label htmlFor="email">Email Adress</label>
        <input type="email"
                name='email' 
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
        />
        
        {touched.email && errors.email &&<span>{errors.email}</span>}
        

        <button type='submit'>Submit</button>



        </form>



    </div>
  )
}
