
import { ProductButtons, ProductImage,ProductCard,ProductTitle } from "../components"

import '../styles/custom-styles.css'

import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from "../data/products";







export const ShoppingPage = () => {
  
  const {shoppingCart,onProductCountChange}=useShoppingCart()
  
  
  return (
    <div >
        <h1>Shopping Store</h1>
        
        <hr />
        
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          
        {products.map(product=>(

          <ProductCard 
          product={product}
          className="bg-dark text-white"
          key={product.id}
          onChange={onProductCountChange}
          value={shoppingCart[product.id]?.count || 0}//en el value del padre hacemos que se sincronice los valores de ambos, el shopping cart y el producto padre
          
          >{/*tenemos que tratar que este product padre le mande toda la data a los hijos, y no que la agreguemos manualmente aca */}

          <ProductImage className="custom-image"/>
          <ProductTitle className="text-bold"/>
          <ProductButtons className="custom-buttons"/>

          </ProductCard>

        ))}


            

            
          </div>
          
        <div className="shopping-cart">

          {
            Object.entries(shoppingCart).map( ([key,product]) => (   //el Object.entries permite que un objeto le ponga el map, sino no podria 
            
             //usamos el map y metemos la tarjeta adentro para poner el shopping carty cuando toquemos 1 aparezca en el mini carrito
                  <ProductCard 
                    key={key}  
                    product={product}
                    className="bg-dark text-white"
                    style={{width: '100px'}}
                    value={product.count}
                    onChange={onProductCountChange}
                    >{/*tenemos que tratar que este product padre le mande toda la data a los hijos, y no que la agreguemos manualmente aca */}
          
                    <ProductImage className="custom-image"/>
                    
                    <ProductButtons className="custom-buttons"
                    style={{display:'flex',
                      justifyContent:'center'
                    }}/>
          
                    </ProductCard>
              ) )
          
          }

        
          

        </div>



    </div>
  )
}
