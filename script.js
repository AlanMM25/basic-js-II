//Bienvenida a Javascript básico parte II, donde veremos condicionales y bucles.

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//CONDICIONALES

//Ejercicio 1: Escribe un condicional if/else que imprima en la consola 'Eres mayor de edad' cuando la constante age tenga el valor correspondiente, si no es así, debe imprimir 'No eres aún mayor de edad'

let age = 18
let underAge = 'Aún no eres mayor de edad'
let overAge = 'Eres mayor de edad'

function ageRegister(){
    if (age >= 18){
        return overAge
    }
    else{
        return underAge
    }
}

const ageResult =
    age >= 18
    ? (overAge)
    : (underAge)

console.log(ageResult)
//Escribe tu código aquí


//Ejercicio 2: Cambia el valor de age a 12 para mirar el resultado del ejercicio anterior.

age = 12

console.log(ageRegister())


//Ejercicio 3: Escribe un condicional if/else que lea la constante pet y si es un perro, que imprima en la consola "Tengo un perro", si es un gato, que imprima en la consola "Tengo un gato", si es un pájaro, que imprima en la consola "Tengo un pájaro" y si no es ninguno de los 3 que imprima "No tengo una mascota convencional"

const pet = 'Pájaro'

function petType(pet){
    if (pet.toLowerCase() === 'perro'){
        return 'Tengo un perro'
    }
    if (pet.toLowerCase() === 'gato'){
        return 'Tengo un gato'
    }
    if (pet.toLowerCase() === 'pájaro'){
        return 'Tengo un pájaro'
    }
    else{
        return 'No tengo un mascota convencional'
    }
}


console.log(petType('GaTo'))
//Escribe tu código aquí


//Ejercicio 4: cambia el valor de pet a "serpiente" y mira el resultado en consola para comprobar que tu código funciona bien.

console.log(petType('Serpiente'))


//Ejercicio 5: Haz el mismo ejercicio 3, pero con el condicional switch.

//Escribe tu código aquí

let pet2 = 'puto cagón'

switch(pet2.toLowerCase()){
    case 'perro':
        console.log('Tengo un perro')
        break;
    case 'gato':
        console.log('Tengo un gato')
        break;
    case 'pájaro':
        console.log('Tengo un pájaro')
        break;
    default:
        console.log(`Tengo un ${pet2.toLowerCase()}.`);
}

//Ejercicio 6: Usando un operador ternario, escribe un programa que lea la constante weather e imprima en consola si es soleado "Me vestiré con un vestido" y si no es así que imprima "Me vestiré con pantalón"

const weather = "soleado"

const result =
    weather === "soleado"
    ? ('Me vestiré con vestido')
    : ('Me vestiré con pantalón');

console.log(result)

//Ejercicio 7: cambia el valor de weather a "frío" y mira el resultado en consola para comprobar que tu código funciona bien.

//Ejercicio 8: Escribe un programa que al darle la constante 'value' imprima en consola "Es un número" cuando el valor sea de tipo number, "Es un string" cuando el valor sea de tipo string o si no es ni uno ni otro que imprima "No es ni número ni string". Puedes hacerlo con cualquier tipo de condicional.

const value = null
let valueString = 'Es un string'
let valueNumber = 'Es un número'
let valueStringNumber = 'No es ni un número ni una string'

function valueType(){
    if (typeof value === 'string')
        return valueString
    if (typeof value === 'number')
        return valueNumber
    return valueStringNumber
}

console.log(valueType)


//BUCLES

//Ejercicio 9: Imprime en consola una lista del 0 al 10 con el bucle for

//Escribe tu código aquí
let numList = 0

for (let numList = 0; numList <=10; numList++){
    console.log('Ahora tienes ' + numList)
}


//Ejercicio 10: Con un bucle for in imprime en pantalla todos los nombres, apellidos y su aporte a la sociedad de las programadoras de la historia contenidas en el array llamado 'programmers', Deberás imprimir el índice y la información de cada una de ellas de la siguiente manera: '0: Ada Lovelace, su aporte fue la máquina analítica'. 

const programmers = [
    {
        name: 'Ada',
        lastname: 'Lovelace',
        knowledge: 'la máquina analítica'
    },
    {
        name: 'Margaret',
        lastname: 'Hamilton',
        knowledge: 'el programa espacial Apolo'
    },
    {
        name: 'Grace',
        lastname: 'Hopper',
        knowledge: 'el lenguaje Cobol'
    },
    {
        name: 'Hedy',
        lastname: 'Lamarr',
        knowledge: 'el wifi'
    }     
]

//Escribe tu código aquí

for (let i = 0; i < programmers.length; i++){
    const programmer = programmers[i];
    console.log(`${programmer.name} ${programmer.lastname}, su aporte fue ${programmer.knowledge}.`);
}

//Ejercicio 11: Con un bucle for of imprime en consola "Hola, mi nombre es ... " y reemplaza los tres puntos con cada nombre del array dado.

const names = ['Carla', 'Alex', 'Judith', 'Maria', 'Noelia']

for(let i = 0; i < names.length; i++){
    const singleName = names[i];
    console.log(`Hola, mi nombre es ${singleName}`)
}


//Ejercicio 12: Con un bucle while imprime en consola una lista del 1 al 5.

//Escribe tu código aquí

let num = 0

while (num <= 5) {
    console.log(num++);
}


//Ejercicio 13: Realiza el mismo ejercicio anterior pero con un bucle do while.

//Escribe tu código aquí

let num2 = 0

do{
      console.log(num2++);

}
while (num2 <= 5);


//Ejercicio 14: Saludo Personalizado
//Crea una función llamada saludar que tome un parámetro llamado nombre y devuelva un saludo personalizado. Luego, llama a la función con diferentes nombres y muestra el resultado en la consola.

function saludar(nombre){
    return `Buenos días, ${nombre}`
}

console.log(saludar('Anderson'))


//Ejercicio 15: Calcular el Área de un Rectángulo
//Crea una función llamada calcularAreaRectangulo que tome dos parámetros (ancho y alto) y devuelva el área del rectángulo. Luego, llama a la función con diferentes valores de ancho y alto y muestra el resultado en la consola.

//Escribe tu código aquí

function calcularAreaRectangulo(ancho, alto){
    return 'el área del rectángulo es ' + (ancho * alto) + 'cm^2'
}

console.log(calcularAreaRectangulo(4, 5))