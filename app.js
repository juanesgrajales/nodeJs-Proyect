import pc from "picocolors";
import { productos } from "./data/product.js";
import { formatearPrecio } from "./utils/format.js";
import {
  listarAgotados,
  valorInventario,
  buscarPorNombre,
  vender,
  listarPorCategoria
} from "./services/inventario.js";

const comando = process.argv[2];
const valor1 = process.argv[3];
const valor2 = process.argv[4];

console.log(pc.green("===== TIENDA DON PEDRO ====="));

if (comando === "todos") {
  console.table(productos);
} else if (comando === "agotados") {
  for (const producto of listarAgotados()) {
    console.log(`AGOTADO: ${producto.nombre}`);
  }
} else if (comando === "buscar") {
  const texto = valor1 === undefined ? "" : valor1.trim();

  if (!texto) {
    console.error(pc.red("Uso: npm start -- buscar <nombre>"));
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
} else if (comando === "valor") {
  console.log(`Valor del inventario: ${formatearPrecio(valorInventario())}`);
} else if (comando === "vender") {
  const id = Number(valor1);
  const unidades = Number(valor2);

  if (!Number.isInteger(id) || !Number.isInteger(unidades) || unidades <= 0) {
    console.error(pc.red("Uso: npm start -- vender <id-producto> <unidades>"));
  } else {
    const resultado = vender(id, unidades);

    if (resultado.startsWith("ERROR:")) {
      console.error(pc.red(resultado));
    } else {
      console.log((resultado));
    }
  }
} else if (comando === "categoria") {
  const categoria = valor1 === undefined ? "" : valor1.trim();

  if (!categoria) {
    console.error(pc.red("Uso: npm start -- categoria <nombre-categoria>"));
  } else {
    const resultados = listarPorCategoria(categoria);
    if (resultados.length === 0) {
      console.log(`No hay productos en la categoría "${categoria}"`);
    } else {
      console.log(`Categoría: ${categoria}`);
      for (const producto of resultados) {
        console.log(
          `${producto.nombre}: ${formatearPrecio(producto.precio)} (quedan ${producto.cantidad})`
        );
      }
    }
  }
} else {
  console.log(
    "Comandos disponibles:\n",
    "npm start -- todos\n",
    "npm start -- agotados\n",
    "npm start -- buscar <nombre>\n",
    "npm start -- valor\n",
    "npm start -- vender <id-producto> <unidades>\n",
    "npm start -- categoria <nombre-categoria>"
  );
}
