let totalCompra = 150;

let estadoEnvio = (totalCompra >= 100) ? "Gratis" : "De pago";

document.write("<h2>Resultado del Ejercicio 10</h2>");
document.write("Total de la compra: $" + totalCompra + "<br>");
document.write("Estado del envío: " + estadoEnvio);

console.log("Estado del envío:", estadoEnvio);