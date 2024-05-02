import { useField, ErrorMessage } from 'formik';

interface Props{
label:string;
name:string;
type?:'text'|'email'| 'password';
placeholder?: string;
[x:string]:any;//comodin para poder agregar parametros

}



export const MyTextInput = ({label, ...props}:Props) => {
  
    const [field]= useField(props)//el field y el meta son para agregar errores y todos los campos con las props sin necesidad de desestructurar todo como antes
  
  
    return (
    <>
    <label htmlFor={props.id || props.name}>{label}</label>
    <input {...field} className="text-input" {...props}/>
    
    <ErrorMessage name={props.name} component='span' />
    
    </>
  )
}
