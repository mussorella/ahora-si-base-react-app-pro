
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";


  
  export interface Product{//asi obligo q me tiene que mandar un producto con el id y titulo y como debe ser
    id: string;
    title: string;
    img?: string;
  }
  
  export interface ProductContextProps{//como debe lucir el provider
  counter: number;//los datos los saque del value del provider de abajo
  increaseBy: (value:number)=>void;
  product:Product
  }


  export interface ProductCardHOCProps{
    ({ children, product }: ProductCardProps ) : JSX.Element,
     Title: (Props: ProductTitleProps) => JSX.Element,
     Image: (Props: ProductImageProps) => JSX.Element,
     Buttons: (Props:ProductButtonsProps) => JSX.Element
  }