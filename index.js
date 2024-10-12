console.log('hola mundo')

//Clases y objetos
// const obj = {
//   name: 'silvia',
//   age: 20,
// }

// obj.name = 'Omar'
// obj['age'] = 21

// console.log(obj.name)
// console.log(obj['age'])

// const persona = {
//   nombre: 'Ana',
//   saludar() {
//     console.log(`Hola, Mi nombre  es ${this.nombre}`)
//   }
// }
// persona.saludar()


// class Coche {
//   constructor(marca) {
//     this.marca = marca
//   }

//   mostrarMarca() {
//     console.log(`Este coche es un ${this.marca}`)
//   }
// }

// const miCoche = new Coche('Toyota')
// miCoche.mostrarMarca()


//Clases Auto

class Auto {
  constructor(brand, model, year) {
    this.brand = brand 
    this.model = model 
    this.year = year
    this.speed = 0 
  }

  //Metodo acelerar
  acelerar(option) {
    this.speed += option
    console.log(`${this.brand} ${this.model} ha acelerado. Velocidad actual: ${this.speed} km/h`);
  }

  //Metodo frenar
  frenar() {
    if (this.speed > 0) {
      this.speed -= 10
    } else {
      this.speed = 0
    }
    console.log(`${this.brand} ${this.model} Ha frenado, Velocidad actual: ${this.speed} km/h`)
  }

  //Metodo para mostrar detalles del auto
  detalles(name) {
    console.log(`Auto: ${this.brand} ${this.model} (${this.year}), Velocidad: ${this.speed} km/h, Dueño actual: ${name}`)
  }

}


const auto1 = new Auto('Toyota', 'Corolla', 2021);
const auto2 = new Auto('Ford', 'Mustang', 2020)

console.log(auto1)

//Intereactuar Auto 1
auto1.detalles('Omar')
auto1.acelerar(20)
auto1.acelerar(10)
auto1.frenar()
auto1.detalles('Xavier')
console.log('==============')
//Intereactuar Auto 2
auto2.detalles('Alfredo')
auto2.acelerar(30)
auto2.frenar()
auto2.frenar()
auto2.detalles('Silvia')

// const var1 = () => {

// }

// [1,2,3,4,5,6].forEach((num) => {
//   console.log(num)
// })


// const obj1 = {
//   caminar: () => {
    
//   }
// }
// const obj2 = {
//   caminar: function() {

//   }
// }


