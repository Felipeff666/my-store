import { Component } from '@angular/core';

//@component es un decorador que asocia a todos los archivos que forman parte de un componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  //metodo dentro de nuestra clase
  public toogleButton(){
    this.btnDisabled = !this.btnDisabled //si estaa en true convierte en false y viceversa
  }

  public incrementarEdad(){
    this.persona.age += 1;
  }

}
