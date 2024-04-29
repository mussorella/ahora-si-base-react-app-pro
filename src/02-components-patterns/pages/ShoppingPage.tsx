
import { ProductButtons, ProductImage,ProductCard,ProductTitle } from "../components"




import { products } from "../data/products";

const product=products[0]





export const ShoppingPage = () => {
  
  
  
  
  return (
    <div >
        <h1>Shopping Store</h1>
        
        <hr />

          <ProductCard 
          product={product}
          key={product.id}
          initialValues={{
            count:4,
            //maxCount:10,
          }}
          >


            {
              ({reset, isMaxCountReached,maxCount,increaseBy,count })=>(

                <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
                </>

              )
            }

          </ProductCard>

    </div>
  )
}
//formik tarjeta de producto
//initializer es una prop que manda valores iniciales
//luego de el initializer viene una funcion, una desestructuracion de argumentos
//esta funcion es la misma que renderiza el formulario