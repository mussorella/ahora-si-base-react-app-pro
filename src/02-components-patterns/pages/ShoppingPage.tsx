import { ProductButtons, ProductImage,ProductCard,ProductTitle } from "../components"


const product={
id: '1',
title: 'Coffee Mug - Card',//aca es la data obligada q tiene q tener el producto para ser presenatdo
img:'./coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        
        <hr />
        
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          <ProductCard product={product}>
            
            <ProductCard.Image/>
            <ProductCard.Title title={'Hola Mundo'}/>
            <ProductCard.Buttons/>

          </ProductCard>
            <ProductCard product={product}>{/*tenemos que tratar que este product padre le mande toda la data a los hijos, y no que la agreguemos manualmente aca */}
            
            <ProductImage/>
            <ProductTitle title={'coffee mug'}/>
            <ProductButtons />

            </ProductCard>
          </div>
        
    </div>
  )
}
