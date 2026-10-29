import pc from "picocolors";
import { productos } from "./data/product.js";
import { formatearPrecio } from "./utils/format.js";
import {
  listarAgotados,
  valorInventario,
  buscarPorNombre,
  vender,
} from "./services/inventario.js";

const comando = process.argv[2];
const valor1 = process.argv[3];
const valor2 = process.argv[4];

console.log(pc.green("===== TIENDA DON PEDRO ====="));

if (comando === "todos") {
  console.table(productos);
}
else if (comando === "agotados") {
  for (const producto of listarAgotados()) {
    console.log(`AGOTADO: ${producto.nombre}`);
  }
}
else if (comando === "buscar") {
  const texto = valor1 === undefined ? "" : valor1.trim();
  if (!texto) {
    console.error(pc.red("Uso: npm start -- buscar <nombre>"));
    process.exitCode = 1;
  } else {
    const resultados = buscarPorNombre(texto);
    if (resultados.length === 0) {
      console.log(`No hay productos que contengan "${texto}"`);
    } else {
      for (const producto of resultados) {
        console.log(
          `Encontrado: ${producto.nombre}: ${formatearPrecio(producto.precio)} (quedan ${producto.cantidad})`
        );
      }
    }
  }
}
else if (comando === "valor") {
  console.log(`Valor del inventario: ${formatearPrecio(valorInventario())}`);
}
else if (comando === "vender" && valor1 !== undefined && valor2 !== undefined) {
  const id = Number(valor1);
  const unidades = Number(valor2);

  if (!Number.isInteger(id) || !Number.isInteger(unidades) || unidades <= 0) {
    console.error(pc.red("Uso: npm start -- vender <id-producto> <unidades>"));
    process.exitCode = 1;
  } else {
    const resultado = vender(id, unidades);
    if (resultado.startsWith("ERROR:")) {
      console.error(pc.red(resultado));
      process.exitCode = 1;
    } else {
      console.log(pc.green(resultado));
    }
  }
} else {
  console.log(
    "Comandos disponibles:","\n",
    "npm start -- todos","\n",
    "npm start -- agotados ","\n",
    "npm start -- buscar <nombre> ","\n",
    "npm start -- valor ","\n",
    "npm start -- vender <id-producto> <unidades>"
  );
}