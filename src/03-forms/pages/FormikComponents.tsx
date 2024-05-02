import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../styles/styles.css'




export const FormikComponents = () => {
  
  
    return (
    <div>
        <h1>Formik yup </h1>

        <Formik   //en lugar de usar el custom hook directamente usamos el formik
        initialValues=
        {{ 
        firstName:'',
        lastName:'',
        email:'',
        terms:false,
        jobType:''

      }}
        
        onSubmit={(values:any)=>{
          console.log(values)
        }}
        
        validationSchema={
          Yup.object({
            firstName: Yup.string()
                            .max(15,'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
            lastName: Yup.string()
                            .max(10,'Debe de tener palabras 10 o menos')
                            .required('Requerido'),
            email: Yup.string()
                        .email('El correo no tiene formato valido')
                        .required('Requerido'),
            terms: Yup.boolean()
                        .oneOf([true],'Debe de aceptar las condiciones'),
            jobType: Yup.string()
                        .notOneOf(['it-jr'], 'Esta opción no es permitida')
                        .required('Requerido')
            
                
                    
                      })
        }>


          {(formik) =>(//una funcion que es pasada como un children, dentro d eun HOC
            
            <Form>
        
            <label htmlFor="firstName">First Name</label>
            <Field name='firstName' type='text'/>
            <ErrorMessage name="firstName" component="span"/>
            
            <label htmlFor="lastName">Last Name</label>
            <Field name='lastName' type='text'/>
            <ErrorMessage name="lastName" component="span"/>
            
            <label htmlFor="email">Email Adress</label>
            <Field name='email' type='text'/>
            <ErrorMessage name="email" component="span"/>
          
            
            <label htmlFor="jobType">Job Type</label>
            <Field name='jobType' as='select'>
            <option value="">Pick Something</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="it-senior">It Senior</option>
            <option value="it-jr">It Junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span"/>

            <label>
              Terms and Conditions 
            <Field name='terms' type='checkbox'/>
            </label>
            <ErrorMessage name="terms" component="span"/>

    
            <button type='submit'>Submit</button>
    
            </Form>
          )}
      

        </Formik>
        

        



    </div>
  )
}//lo que hice fue simplificar codigo, use el Formik de formik para desarrollar el form, el Form de formik para evitar el codigo de custom hook, el Error Message tambien y el Feidl lo mismo a lo anterior, todo para cortar codigo
