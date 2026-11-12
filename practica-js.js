//el console.log es para mostrar la informacion en la terminal o consola
//el return es para devolver un valor desde una funcion al lugar donde se llamo

function calculartTotal(precio, cantidad) {
    const total = precio * cantidad;
    return total; 
}

function calcularSuma(a, b) {
    const total = a +b;
    return total;
}

function calcularResta(a, b){
    const total = a -b;
    return total;
}

function calcularMultiplicacion(a,b) {
    const total = a * b;
    return total;
}

function calcularDivision(a, b){
    const total = a / b;
    return total;
}
 function calcularPromedio(nota1, nota2, nota3){
    const suma = nota1 + nota2 + nota3;
    const promedio = suma / 3;
    return promedio;
 }

console.log("Calcular el promedio")  
const resultadoPromedio = calcularPromedio(4.0, 3.5, 5.0);
console.log(resultadoPromedio);


console.log("Resultado de la suma")
const resultadoSuma = calcularSuma(45, 50);
console.log(resultadoSuma);

console.log("Resultado de la resta")
const ressultadoResta = calcularResta(25000, 10000);
console.log(ressultadoResta);

console.log("Resultado de la multiplicacion")
const resultadoMulti = calcularMultiplicacion(12, 25);
console.log(resultadoMulti);

console.log("Resultado de la division")
const resultadoDivision = calcularDivision(48, 8);
console.log(resultadoDivision);

console.log("Calcular total");
const resultado = calculartTotal(50000, 3);
console.log(resultado);