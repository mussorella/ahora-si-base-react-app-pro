import { Formik,  Form,  } from "formik";
import * as Yup from "yup";
import '../styles/styles.css'
import { MyCheckBox, MySelect, MyTextInput } from "../components";



export const FormikAbstractations = () => {
  
  
    return (
    <div>
        <h1>Formik Abstractions </h1>

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
              <MyTextInput label='First Name' 
              name='firstName'
              placeholder="First Name"

              /> {/*todo esto equivale a los 3 label de abajo */}

            
            
            <MyTextInput label='Last Name' name='lastName' placeholder="Last Name"/>
            
            <MyTextInput label='Email Adress' name='email' type="email" placeholder="Email"/>
            
            <MySelect label='Job Type' name='jobType' >
            <option value="">Pick Something</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="it-senior">It Senior</option>
            <option value="it-jr">It Junior</option>
            </MySelect>
            
            <MyCheckBox label='Terms and Conditions' name='terms'/>

    
            <button type='submit'>Submit</button>
    
            </Form>
          )}
      

        </Formik>
        

        



    </div>
  )
}//lo que hice fue simplificar codigo, use el Formik de formik para desarrollar el form, el Form de formik para evitar el codigo de custom hook, el Error Message tambien y el Feidl lo mismo a lo anterior, todo para cortar codigo
