import styles from "../styles/styles.module.css";

import {  createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';





export const ProductContext=createContext({} as ProductContextProps);
const {Provider}=ProductContext;//el provider es el proveedor de info





export const ProductCard = ({children,product}: ProductCardProps) => {
 
    const {counter,increaseBy}= useProduct()
return(//pongo el provider aca para que exporte los datos 
 <Provider value={{
  counter,
  increaseBy,
  product
 }}>

    <div className={styles.productCard}>
        {children}
        
    </div>

 </Provider>
 
)
    
}




