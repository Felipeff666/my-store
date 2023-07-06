import { Component } from '@angular/core';
import { Product } from './Product.model';

//@component es un decorador que asocia a todos los archivos que forman parte de un componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  register = {
    name:'',
    email:'',
    password:''
  }

  widthImg=10;
  box = {
    width: 100,
    height:100,
    background:'red'
  }

  name = 'Felipe'; // por defecto se declara com publico
  age = 23;
  img = 'https://source.unsplash.com/random';

  btnDisabled = true
  valorInput = "este es el valor de mi input"

  persona = {
    name : "Felipe",
    age : 50,
    img:'https://source.unsplash.com/random'
  }

  nombres:String[] = ['Felipe','Jhon','Gabriel','Fulanito'];
  newName='';

  products:Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://github.com/platzi/angular-fundamentals/blob/10-step/src/assets/images/toy.jpg?raw=true',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://github.com/platzi/angular-fundamentals/blob/10-step/src/assets/images/bike.jpg?raw=true'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://github.com/platzi/angular-fundamentals/blob/10-step/src/assets/images/album.jpg?raw=true'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://github.com/platzi/angular-fundamentals/blob/10-step/src/assets/images/books.jpg?raw=true'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://github.com/platzi/angular-fundamentals/blob/10-step/src/assets/images/house.jpg?raw=true'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://github.com/platzi/angular-fundamentals/blob/10-step/src/assets/images/glasses.jpg?raw=true'
    }
  ]

  //metodo dentro de nuestra clase
  public toogleButton(){
    this.btnDisabled = !this.btnDisabled //si estaa en true convierte en false y viceversa
  }

  public incrementarEdad(){
    this.persona.age += 1;
  }

  onScroll(event:Event){
    //target es el metodo que recupera al elemento HTML
    const element = event.target as HTMLElement;
    console.log(element.scrollTop );
  }

  changeName(event:Event){
    const element = event.target as HTMLInputElement;
    this.persona.name = element.value;
  }
  agregarNombre(){
    this.nombres.push(this.newName);
    this.newName = ''
  }
  eliminarNombre(index:number){
    this.nombres.splice(index,1)
  }

  onRegister(){
    console.log(this.register)
  }

}
