import styles from "../styles/styles.module.css";

import {  ReactElement, createContext, CSSProperties } from "react";
import { useProduct } from "../hooks/useProduct";
import { Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';





export const ProductContext=createContext({} as ProductContextProps);
const {Provider}=ProductContext;//el provider es el proveedor de info


export interface Props{
    product: Product;//aca obliga que el proucto sea enviado como tal
    children?: ReactElement| ReactElement[];//es un elemento de react
    className?: string;
    style?: React.CSSProperties;
    onChange?:(args:onChangeArgs)=>void;
    value?:number;
  }


export const ProductCard = ({children,product, className, style, onChange, value}: Props) => {
 
    const {counter,increaseBy}= useProduct({
        onChange,
         product, 
         value
        })


    return(//pongo el provider aca para que exporte los datos 
 <Provider value={{
  counter,
  increaseBy,
  product
 }}>

    <div className={`${styles.productCard}  ${className}`}
    style={style}>
        {children}
        
    </div>

 </Provider>
 
)
    
}




