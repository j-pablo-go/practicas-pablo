// EJEMPLO PARA CREAR UNA LISTA
document.addEventListener("DOMContentLoaded", () => {
    /* Ejemplo de cómo se hacen las listas en html se definen así, para que entiendas la estructura:
    <ul>
        <li>Perro</li>
        <li>Gato</li>
        <li>Salamandra</li>
    </ul> */

    // 1) Recuperas con esta linea el div del html mediante el id
    const div = document.getElementById("listaArray");
    // 2) creas el contenido que quieres mostrar
    var arrayParaMostrar = ['Goku', 'Vegeta', 'Videl'];
    // 3) Creas la etiqueta donde quieres meter el contenido, en este caso una lista (ul)
    const ul = document.createElement("ul");
    // 4) Hay que crear la etiqueta (li) dentro de (ul)
    // Con un foreach se repetirá tantas veces como elementos haya en el array
    arrayParaMostrar.forEach(function (item) {
        // Crea el elemento li
        var li = document.createElement("li");
        // le asigna el valor al li
        li.textContent = item;
        // añade los li al ul
        ul.appendChild(li);
    });
    // 5) Esta línea añade el ul al div
    div.appendChild(ul);
});

// EJEMPLO MOSTRAR TEXTO DIRECTAMENTE
document.addEventListener("DOMContentLoaded", () => {
    // 1) Recuperas con esta linea el div del html mediante el id
    const div = document.getElementById("textNormal");
    // 2) con innerHTML le das un valor al div
    div.innerHTML = 'Hola, soy un texto normal';
});

// EJEMPLO MOSTRAR TEXTO CONCATENADO
document.addEventListener("DOMContentLoaded", () => {
    // 1) Recuperas con esta linea el div del html mediante el id
    const div = document.getElementById("textConcatenado");
    // 2) Creas las variables
    const nombreNaruto = 'Naruto';
    const nombreGoku = 'Goku';
    // 3) le das valor a la etiqueta div con innerHTML, con el contenido que quieres mostrar
    div.innerHTML = "Digan lo que digan, " + nombreGoku + " siempre será mejor que " + nombreNaruto;
});

document.addEventListener("DOMContentLoaded", () => {
    // 1) Recuperas con esta linea el div del html mediante el id
    const div = document.getElementById('replica');
    // 2) Creas las variables
    const nombreNaruto = 'Naruto';
    const nombreGoku = 'Goku';
    // 3) le das valor a la etiqueta div con innerHTML, con el contenido que quieres mostrar
    div.innerHTML = nombreGoku + ' no le llega ni a la suela de los tabi a ' + nombreNaruto + '. Ahora vas y lo cascas.';
});


// 1) Ejercicio 1:
/* Crear una etiqueta div en el html con el id "serie",
después, hacer el proceso necesario para completar la siguiente frase:
"Cuando tengo tiempo veo ________, y el personaje que más me gusta es ________."
Seguidamente, mostrarla en el div que se ha creado. */

document.addEventListener("DOMContentLoaded", () => {
    //Aquí va el código del ejercicio
    const div = document.getElementById('serie');

    const nombreHunterXHunter = 'Hunter X Hunter';
    const nombreKillua = 'Killua';

    div.innerHTML = "Cuando tengo tiempo veo " + nombreHunterXHunter + ", y el personaje que más me gusta es " + nombreKillua + " .";

});

document.addEventListener("DOMContentLoaded", () => {
    //Aquí va el código del ejercicio
    const seccion = document.getElementById('respuestas');
    const series = document.createElement('DIV');
    series.id = 'series';
    seccion.appendChild(series);

    const div = document.getElementById('series');

    const onePiece = 'One Piece';
    const protagonista = 'Monkey D. Luffy';
    const poder = 'Haki';

    div.innerHTML = 'También he visto ' + onePiece + ', es la serie más larga, donde '
     + protagonista + ' es el protagonista y en esta serie el poder se llama ' + poder + '.';

});


// 2) Ejercicio 2:
/* Crear una etiqueta div en el html con el id "listaDeComidas",
después, crear una lista (array) que contenga al menos 4 comidas que más te gusten,
pero el array debe estar relleno con variables (no escritas directamente).
Seguidamente, mostrar la lista en pantalla */

document.addEventListener("DOMContentLoaded", () => {
    //Aquí va el código del ejercicio
    var listaDeComidas = [];

    var comida1;
    var comida2;
    var comida3;
    var comida4;
    
    comida1 = 'Arroz Caldoso';
    comida2 = 'Gambas al Ajillo';
    comida3 = 'Fajitas';
    comida4 = 'Estofado de Carne';

    listaDeComidas.push(comida2);
    listaDeComidas.push(comida3);
    listaDeComidas.push(comida4);
    listaDeComidas.unshift(comida1);
    
    console.log(listaDeComidas);
});


// 3) Ejercicio 3:
/* Crear 2 etiquetas div una con el id "Personaje1" y la otra con el id "Personaje2",
después, hacer la lógica necesaria para que muestre los siguientes datos en pantalla:

Nombre: Goku
Poder: Kame Hame Ha
Comida: Arroz
Altura: 179

Nombre: Vegeta
Poder: Final Flash
Comida: Sopa
Altura: 168

*/

document.addEventListener("DOMContentLoaded", () => {
    //Aquí va el código del ejercicio
var personaje1 = document.getElementById('personaje1');
var personaje2 = document.getElementById('personaje2');

personaje1 = [
    {Nombre: 'Goku'},
    {Poder: 'Kame Hame Ha'},
    {Comida: 'Arroz'},
    {Altura: 179}
]
personaje2 = [
    {Nombre: 'Vegeta'},
    {Poder: 'Final Flash'},
    {Comida: 'Sopa'},
    {Altura: 168}
]
console.log(personaje1, personaje2);

personaje1.forEach(cualidad => {
    console.log(cualidad);
});
personaje2.forEach(cualidad => {
    console.log(cualidad);
});

for(var i = 0; i < personaje1.length; i++)
    console.log(personaje1[i]);
for(var i = 0; i < personaje2.length; i++)
    console.log(personaje2[i]);
});