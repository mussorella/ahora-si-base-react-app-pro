import { ChangeEvent, useState } from "react";

export const useForm=<T>(initState:T)=>{

    const [formData, setFormData] = useState(initState);
    
    


    const onChange=(event:ChangeEvent<HTMLInputElement>)=>{//con el dato de abajo, pego el valor del evento aca
        setFormData(prev=>({
            ...prev,
            [event.target.name]:event.target.value//y asi es como permito escribir en el formualrio
        }))
    }



    const resetForm=()=>{
        setFormData({...initState})
    }



    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return{
        ...formData,//con esto despliego el name password1,2 y email
        //properties
        formData,

        //methods
        onChange,
        resetForm,
        isValidEmail
    }
}