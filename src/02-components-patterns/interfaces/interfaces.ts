import { ReactElement } from "react";

export interface ProductCardProps{
    product: Product;//aca obliga que el proucto sea enviado como tal
    children?: ReactElement| ReactElement[];//es un elemento de react
  }
  
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
    ({ children, product }: ProductCardProps) : JSX.Element,
     Title: ({ title }: {title?: string }) => JSX.Element,
     Image: ({ img }: {img?: string }) => JSX.Element,
     Buttons: () => JSX.Element
  }