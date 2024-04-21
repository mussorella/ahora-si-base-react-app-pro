import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"


export const useShoppingCart = () => {
  
    const [shoppingCart, setshoppingCart] = useState<{[key:string]:ProductInCart}>({})//aca estoy diciendo que la llave es un string como el de abajo, que proviene de la interfaz, osea que si o si la interfaz va a tener un count, que se va a almacenar en el shopping cart

  
     const onProductCountChange=({count,product}:{count:number, product:Product})=>{//con este onChange, podemos ver que los objetos en el recuadro chiquito son iguales al recuadro mayor, osea se conectan los contadores, para armar ahora un carrito de compras
      
      
      
        setshoppingCart(oldShoppingCart=>{
        
  
  
  
          const productInCart:ProductInCart=oldShoppingCart[product.id]||{...product,count:0}//si el producto existe ponemos product in cart sino ejecuta el count de 0
  
          if(Math.max(productInCart.count+count,0)>0){//valor maximo de estos 2
          productInCart.count+=count//si esto da ams que 0 sumo el contador al producto in cart
          return{
            ...oldShoppingCart,
            [product.id]:productInCart
          }
          }
          //borrar el producto
          const {[product.id]:toDelete, ...rest}=oldShoppingCart
          return {...rest}
            //con todod esto hacemos que desaparezca el producto si no tenemos nada en el shopping cart
  
  
          //if (count===0){
          
          //const {[product.id]:toDelete, ...rest}=oldShoppingCart
          
          //return{
            //...rest
            //borramos si no hya anda del arreglo de productos
          //}
        //}
        
        //return {...oldShoppingCart,
         // [product.id]:{...product,count}
          //de esta manera, agrego las cosas ala rreglo del carrito
        //}
      })
    }
    return{
        
        onProductCountChange,
        shoppingCart
    }


}
