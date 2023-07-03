const username:string = 'Epilefff';
const usernames:string | number = 666 ; // puede ser de tipo number o string

const sum = ( a:number, b:number )=>{
  return a+b;
}
sum(1,3);

//patron de orientado a objetos

class Person {
  private age:number
  lastname:string

  constructor(age:number , lastname:string){
    this.age = age;
    this.lastname = lastname;
  }

}

class Person2 {

  constructor(private age:number , public lastname:string){
    /* aqui se declaran valores por defecto de las declaraciones anteriores */
  }

}
const felipe = new Person2(23,'Flores');
const nico = new Person(15,'Molina');

