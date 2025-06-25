
document.addEventListener("DOMContentLoaded", () => {
  const opciones = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"];
  const select = document.getElementById("miSelect");

  // Limpiar el contenido previo si lo hay
  select.innerHTML = "";

  // Insertar opciones desde el array
  opciones.forEach(opcion => {
    const optionElement = document.createElement("option");
    optionElement.textContent = opcion;
    optionElement.value = opcion;
    select.appendChild(optionElement);
  });
});



// 1 - Crear variables con los tipos de datos y luego iniciarla:
// string, number, boolean, undefined, null
var nombre = 'Pablo';
var numero = 42;
var pregunta = true;
var casa = undefined;
var moto = null;
console.log( numero, pregunta, casa, moto); 
console.log(`Me llamo ${nombre} y tengo ${numero} años `);
console.log("Me llamo " + nombre + " y tengo " + numero + " años");


function resultado() {
    var nombre; // string
    var edad; // number
    var estado; // boolean
    var noSeSabe; // undefined
    var nulo; // null

    nombre = 'Sergio';
    edad = 31;
    estado = true;
    noSeSabe = undefined;
    nulo = null;
}



// 2 - Crear las variables necesarias y hacer la siguiente cuenta:
// 30 + 20 + 20 - 10 + 24
var numero1 = 30;
var numero2 = 20;
var numero3 = 20;
var numero4 = 10;
var numero5 = 24;
var resultadoFinal = numero1 + numero2 + numero3 - numero4 + numero5;
console.log('resultado', resultadoFinal); 

function resultado_2() {
    var num1 = 30; 
    var num2 = 20;
    var num3 = 20;
    var num4 = 10;
    var num5 = 24;
    var resultado;

    resultado = num1 + num2 + num3 - num4 + num5;
}



// 3 - Crear una lista (array) de nombres y mostrarlo por pantalla:

var miArray = ['Juan', 'Pedro', 'Miguel'];
miArray.push('Perico');
miArray.unshift('chachivo');
var numero = 30;
miArray.push(numero);
console.log(miArray);
console.log('Posicion 1', miArray[1]);

for(var i = 0; i < miArray.length; i++ ){
    console.log('pedro', miArray[i]);
}

miArray.forEach(perico => {
    console.log(perico);
});


function resultado_3() {

    var listaManual = ['Sergio', 'Rutinguer', 'Calamardo'];

    var nombre1 = 'Sergio'; 
    var nombre2 = 'Rutinguer';
    var nombre3 = 'Calamardo';
    var lista = [];
    lista[0] = nombre1;
    lista[1] = nombre2;
    lista[2] = nombre3;

    console.log("Lista", lista, listaManual);
}

// condicionales if else
var calle = 85;
if (calle === 77) {
    console.log("ES IGUAL A 77", calle);
} else if (calle === 85) {
    console.log("ES IGUAL A 85", 85);
} else {
    console.log("NO ES IGUAL A 77 NI 85");
}






