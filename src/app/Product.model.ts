
//El simbolo de - ? - hace que un atributo de la interface sea opcional
export interface Product{
  name:string;
  price:number;
  image:string;
  category?:string
}
