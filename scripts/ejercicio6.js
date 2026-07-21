let numero = 10;
let texto = "10";

let igualdadDebil = (numero == texto);
let igualdadEstricta = (numero === texto);

document.write("<h2>Resultado del Ejercicio 6</h2>");
document.write("10 == \"10\": " + igualdadDebil + "<br>");
document.write("10 === \"10\": " + igualdadEstricta);

console.log("10 == \"10\":", igualdadDebil);
console.log("10 === \"10\":", igualdadEstricta);