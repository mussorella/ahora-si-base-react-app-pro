
import { useEffect,  useState } from "react"
import { Product, onChangeArgs } from '../interfaces/interfaces';


interface useProductArgs{
   product:Product,
    onChange?:(args:onChangeArgs)=> void,
    value?:number;
}

export const useProduct =({onChange, product, value=0}:useProductArgs)=>{

    const [counter, setCounter] = useState(value)//el value hace que se ponga en el sopping cart en chiquito el 1
 
    
 //se pone doble negacion para que si es false de tru el use ref
    const increaseBy=(value:number)=>{
    
        const newValue=Math.max(counter+value, 0)
    
    
    setCounter(newValue)
    onChange && onChange({count: newValue, product});
}//si da true se ejecuta el onchange
    useEffect(() => {
      setCounter(value);//este use effect actualiza el valor del value en el shoppingcart
    
      
    }, [value])
    
return{
    counter,  increaseBy
}

}