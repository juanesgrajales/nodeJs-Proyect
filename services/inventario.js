// Consultas y operaciones del inventario
import { productos } from "../data/product.js";
import fs from "node:fs";
import { formatearPrecio } from "../utils/format.js";

export const buscarPorId = (id) =>
  productos.find((producto) => producto.id === id);

export const listarAgotados = () =>
  productos.filter((producto) => producto.cantidad === 0);

export const valorInventario = () =>
  productos.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );

export const listarPorCategoria = (categoria) =>
  productos.filter((producto) => producto.categoria === categoria);

export const buscarPorNombre = (texto) => {
  const nombreBuscado = texto.trim().toLowerCase();
  return productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(nombreBuscado)
  );
};

export const vender = (id, unidades) => {
  const producto = buscarPorId(id);

  if (producto === undefined) {
    return "ERROR: producto no encontrado";
  }
  if (!Number.isInteger(unidades) || unidades <= 0) {
    return "ERROR: las unidades deben ser un entero mayor que cero";
  }
  if (producto.cantidad < unidades) {
    return `ERROR: no hay suficiente ${producto.nombre} (quedan ${producto.cantidad})`;
  }

  const total = producto.precio * unidades;
  const fecha = new Date().toLocaleDateString("es-CO");
  fs.appendFileSync(
    "ventas.txt",
    `${fecha} | ${producto.nombre} | ${unidades} | $${total}\n`
  );
  producto.cantidad -= unidades;

  return `Venta: ${unidades} x ${producto.nombre} = ${formatearPrecio(total)}. Quedan ${producto.cantidad}`;
};

export const reabastecer = (id, unidades) => {
  const producto = productos.find(p => p.id === id);
  producto.unidades += unidades;
  return `Reabastecido: ${producto.nombre} - Ahora hay ${producto.cantidad}`;
}