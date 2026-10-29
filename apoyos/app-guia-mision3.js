// =============================================================
//  MISIÓN 3 – app.js CON COMANDOS
//  Usa este archivo como GUÍA para reescribir tu app.js
// =============================================================
import pc from "picocolors";
import { productos } from "./data/productos.js";
import { formatearPrecio } from "./utils/formato.js";
import {
  listarAgotados,
  valorInventario,
  buscarPorNombre,
  vender
} from "./servicios/inventario.js";

const comando = process.argv[2];
const valor1 = process.argv[3];
const valor2 = process.argv[4];

console.log(pc.green("===== TIENDA DON PEDRO ====="));

if (comando === "todos") {
  // Ya está hecho como ejemplo
  console.table(productos);
}
// PASO 1: else if (comando === "agotados")  → AGOTADO: NOMBRE
// PASO 2: else if (comando === "buscar" && valor1 !== undefined)
//         → Encontrado: NOMBRE: $ PRECIO (quedan CANTIDAD)  o  No hay productos que contengan "TEXTO"
// PASO 3: else if (comando === "valor")  → Valor del inventario: $ 270.700
// PASO 4: else if (comando === "vender" && valor2 !== undefined)
//         → llama vender(Number(valor1), Number(valor2)) y muestra el mensaje
//           (en rojo con pc.red si empieza con "ERROR")
// PASO 5: else → muestra la lista de comandos disponibles
// Tu código aquí

if (comando === "todos") {
  console.table(productos);
} else if (comando === "agotados") {
  for (const producto of listarAgotados()) {
    console.log(`AGOTADO: ${producto.nombre}`);
  }
} else if (comando === "buscar" && valor1 !== undefined) {
  const resultados = buscarPorNombre(valor1);

  if (resultados.length === 0) {
    console.log(`No hay productos que contengan "${valor1}"`);
  } else {
    for (const producto of resultados) {
      console.log(
        `Encontrado: ${producto.nombre}: ${formatearPrecio(producto.precio)} (quedan ${producto.cantidad})`
      );
    }
  }
} else if (comando === "valor") {
  console.log(`Valor del inventario: ${formatearPrecio(valorInventario())}`);
} else if (comando === "vender" && valor2 !== undefined) {
  const resultado = vender(Number(valor1), Number(valor2));

  if (resultado.startsWith("ERROR:")) {
    console.error(pc.red(resultado));
    process.exitCode = 1;
  } else {
    console.log(pc.green(resultado));
  }
} else {
  console.log(`Comandos disponibles:
  npm start -- todos
  npm start -- agotados
  npm start -- buscar <nombre>
  npm start -- valor
  npm start -- vender <id-producto> <unidades>`);
  if (comando !== undefined) {
    console.error(pc.red(`Comando desconocido: ${comando}`));
    process.exitCode = 1;
  }
}