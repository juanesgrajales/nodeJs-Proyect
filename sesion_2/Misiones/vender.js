// =============================================================
//  MISIÓN 4 – CAJA REGISTRADORA DE DON PEDRO
//  Aprendiz: __Juan Esteban Grajales__
//  Ejemplo:  node vender.js 3 2   (vende 2 unidades del producto con id 3)
// =============================================================
import fs from "node:fs";

const productos = [
  { id: 1, nombre: "Arroz 500 g",           categoria: "granos",    precio: 2800, cantidad: 20 },
  { id: 2, nombre: "Fríjol 500 g",          categoria: "granos",    precio: 5200, cantidad: 8 },
  { id: 3, nombre: "Leche 1 L",             categoria: "lacteos",   precio: 4200, cantidad: 12 },
  { id: 4, nombre: "Queso campesino 250 g", categoria: "lacteos",   precio: 7800, cantidad: 4 },
  { id: 5, nombre: "Pan tajado",            categoria: "panaderia", precio: 6500, cantidad: 5 },
  { id: 6, nombre: "Jabón de loza",         categoria: "aseo",      precio: 3500, cantidad: 0 },
  { id: 7, nombre: "Gaseosa 1.5 L",         categoria: "bebidas",   precio: 5900, cantidad: 10 }
];

const id = Number(process.argv[2]);
const unidades = Number(process.argv[3]);

if (process.argv.length < 4) {
  console.log("Uso: node vender.js <id> <unidades>");
} else {
  const producto = productos.find((p) => p.id === id);

  if (producto === undefined) {
    console.log("ERROR: Producto no encontrado");
  } else if (producto.cantidad < unidades) {
    console.log(`ERROR: No hay suficiente ${producto.nombre} (quedan ${producto.cantidad})`);
  } else {
    // 3. Calcula el total (precio * unidades), réstale las unidades a
    //       producto.cantidad y muestra:
    //       Venta: UNIDADES x NOMBRE = $TOTAL
    //       Quedan CANTIDAD unidades

    const total = producto.precio * unidades;
    producto.cantidad = producto.cantidad - unidades;

    console.log(`Venta: ${unidades} x ${producto.nombre} = $${total}`);
    console.log(`Quedan ${producto.cantidad} unidades`);

    // 4. Guarda la venta en ventas.txt con fs.appendFileSync. Cada venta
    //       en una línea con este formato (no olvides el \n al final):
    //       FECHA | NOMBRE | UNIDADES | $TOTAL
    //       y muestra: Venta guardada en ventas.txt
    const fecha = new Date().toLocaleString("es-CO");
    fs.appendFileSync("ventas.txt", `${fecha} | ${producto.nombre} | ${unidades} | $${total}\n`);
    console.log("Venta guardada en ventas.txt");
  }
}

