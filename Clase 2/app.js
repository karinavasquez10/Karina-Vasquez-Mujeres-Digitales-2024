var variable = 1;
let variable2 = 2;
const CONSTANTE = 3;

/* // tipos de datos
let cadena = "Soy una cadena de texto";
console.log(cadena);
console.log(typeof cadena);

let numero = 10;
console.log(typeof numero);
console.log(numero);

let booleano = false; // true || false
console.log(typeof booleano);
console.log(booleano);

let nulo = null;
console.log(typeof nulo);
console.log(nulo);

let indefinido = undefined;
console.log(typeof indefinido);
console.log(indefinido);

let noEsUnNumero = NaN;
console.log(typeof noEsUnNumero);
console.log(noEsUnNumero);
 */
// Tipos de dato de Objeto

/* const lista = ["jose", 24, true, ["nose", 5, 8]];
const lista2 = new Array(1, 5, 18);

console.log(lista[1]);

const objeto = { nombre: "José", edad: 24, estaAuntenticado: true, elementos: ["nose", 5, 8] };
console.log(objeto.elementos[2]); */

// * Controles de flujo
variable = "5"; // Asisgnación

// Operadores
/* variable = "5"; // Asisgnación
console.log(variable);

let resultado = variable + 2; // suma
console.log(resultado);

let resultado2 = variable - 2; // resta

Math.PI;

let contador = 0;
contador++; // incremernto
contador--; // decremento

console.log(variable == 5); // Igual a
console.log(variable != 5); // Diferente de

console.log(variable === 5);
console.log(variable !== 5);

console.log(3 > 5); // Mayor que
console.log(3 < 5); // Menor que */

/* console.log(variable == 5 && 3 > 5); // AND
console.log(variable == 5 || 3 > 5); // OR

if (!variable == 5) {
    console.log("Entro al IF");
} else if (variable == 9) {
    console.log("Entro a la segunda operación");
} else {
    console.log("Operación final");
}

const variable3 =
    variable == 6
        ? console.log("Entro al IF")
        : variable == 4
        ? console.log("Entro al IF")
        : console.log("No cumple con la condición"); */

var variable = 1;
variable = "5";
variable = Math.PI;

const CASOS_PAGOS = {
    efectivo: "EFECTIVO",
    credito: "CREDITO",
    debito: "DEBITO",
};

let pago = "EFECTIVO";
pago = "CREDITO";

switch (pago) {
    case CASOS_PAGOS.credito:
        console.log("El cliente pago en credito");
        break;

    case CASOS_PAGOS.debito:
        console.log("El cliente pago en debito");
        break;

    case CASOS_PAGOS.efectivo:
        console.log("El cliente pago en efectivo");
        break;

    default:
        console.log("No paso ninguna validación");
        break;
}
