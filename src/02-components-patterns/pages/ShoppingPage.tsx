import { ProductButtons, ProductImage,ProductCard,ProductTitle } from "../components"
import '../styles/custom-styles.css'

const product={
id: '1',
title: 'Coffee Mug - Card',//aca es la data obligada q tiene q tener el producto para ser presenatdo
img:'./coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div >
        <h1>Shopping Store</h1>
        
        <hr />
        
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          <ProductCard product={product}
          className="bg-dark text-white">
            
            <ProductCard.Image className="custom-image"/>
            <ProductCard.Title className="text-bold"/>
            <ProductCard.Buttons className="custom-buttons"/>

          </ProductCard>
            <ProductCard 
            product={product}
            className="bg-dark text-white"
            >{/*tenemos que tratar que este product padre le mande toda la data a los hijos, y no que la agreguemos manualmente aca */}
            
            <ProductImage className="custom-image"/>
            <ProductTitle className="text-bold"/>
            <ProductButtons className="custom-buttons"/>

            </ProductCard>

            <ProductCard 
            product={product}
            
            style={{
              backgroundColor:'goldenrod'
            }}
            >
            
            <ProductImage  
            style={{
              boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
            }}/>
            <ProductTitle 
            style={{
              fontWeight:"bold"
            }}/>
            <ProductButtons 
            style={
              {
               display:'flex',
               justifyContent:'end' 
              }
            }/>

            </ProductCard>
          </div>
        
    </div>
  )
}
