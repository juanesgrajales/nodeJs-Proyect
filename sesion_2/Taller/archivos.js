import fs from "node:fs";

// Ejemplo base
fs.writeFileSync("saludo.txt", "Hola desde Node.js");
const contenido = fs.readFileSync("saludo.txt", "utf8");
console.log("Contenido de saludo.txt:", contenido);

const productosLista = "Arroz 500 g\nLeche 1 L\nPan tajado";
fs.writeFileSync("lista-compras.txt", productosLista);

const listaLeida = fs.readFileSync("lista-compras.txt", "utf8");
console.log("\n--- LISTA DE COMPRAS ---");
console.log(listaLeida);