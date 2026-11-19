//el console.log es para mostrar la informacion en la terminal o consola
//el return es para devolver un valor desde una funcion al lugar donde se llamo
// su mayor diferencia es el objetivo principal del console log es mostrar datos en la consola, en cambio return entrega datos para otro uso de una funcion
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

//RETO 2: funciones flecha

const aplicarIva = precio => precio * 1.19;

console.log("Aplicacion de IVA")
const resultadoIva = aplicarIva(50000);
console.log(resultadoIva);

// Tarea #1

const cuadrado = numero => numero * numero;

console.log("Cuadraro")
const cuadraroN = cuadrado(78);
console.log(cuadraroN);

// Tarea #2

const esMayorEdad = edad => edad >= 18;

console.log("Control edad")
const edad = esMayorEdad(15);
console.log(edad);

//Tarea #3

const nombreCompleto = (nombre, apellido) => nombre + "" + apellido;

console.log("Nombre Completo")
const completo = nombreCompleto("Tatiana", "Pedreros");
console.log(completo);

//RETO 3: arreglos y objetos

const productos = [
    {id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5},
    {id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0},
    {id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3},
    {id: 4, nombre: 'Audífonos', precio: 120000, categoria: 'Audio', stock: 8},
    {id: 5, nombre: 'Webcam', precio: 180000, categoria: 'Accesorios', stock: 4},
    {id: 6, nombre: 'Parlantes', precio: 95000, categoria: 'Audio', stock: 6},
    {id: 7, nombre: 'Micrófono', precio: 150000, categoria: 'Audio', stock: 0},
    {id: 8, nombre: 'Disco duro externo', precio: 280000, categoria: 'Almacenamiento', stock: 5},
    {id: 9, nombre: 'Memoria USB', precio: 35000, categoria: 'Almacenamiento', stock: 10},
    {id: 10, nombre: 'Base para portátil', precio: 80000, categoria: 'Accesorios', stock: 0}
];

//RETO 4: forEach()

console.log("---------------------------")
console.log("Lista de productos")
productos.forEach((productos, indice) => {
    console.log(`${indice + 1}. ${productos.nombre}`);
});

//RETO 5: map()

const nombre = productos.map(productos => productos.nombre);
console.log(nombre);

//Arreglo #1

const precioConIva = productos.map(productos => productos.precio * 1.19);
console.log(precioConIva);

//Arreglo #2

const nombreMayuscula = productos.map(productos => productos.nombre.toUpperCase());
console.log(nombreMayuscula);

//Arreglo #3

const resumenProductos = productos.map(
    productos => `${productos.nombre} cuesta $${productos.precio}`
);
console.log(resumenProductos);

//RETO 6: filter() y find()

const disponibles = productos.filter(productos => productos.stock > 0);
console.log(disponibles);

const productos3 = productos.find(productos => productos.id === 3);
console.log(productos3);

//Filtrar productos con precio mayor a $100.000
console.log("--------------------------------------------")
const caros = productos.filter(productos => productos.precio > 100000);
console.log("Mayores a $100.000:", caros);

//Filtrar productos con precio entre $50.000 y $200.000
console.log("--------------------------------------------")
const rango = productos.filter(
    productos => productos.precio >= 50000 && productos.precio <= 200000
);
console.log("Entre $50.000 y $200.000:", rango);

//Filtrar unicamente una categoria escogida
console.log("--------------------------------------------")
const categoriaElegida = "Pantallas";
const porCategoria = productos.filter(
    productos => productos.categoria === categoriaElegida
);
console.log(`Categoria ${categoriaElegida}:`, porCategoria);