// =============================================================
//  SESIÓN 1 – RETOS DE NIVELACIÓN DE JAVASCRIPT
//  Proyecto: API "Mi Tienda de Barrio"
//  Aprendiz: _Juan Esteban Grajales _   Fecha: __07 Oct___
// =============================================================
//
//  INSTRUCCIONES
//  1. Lee cada reto con calma. Escribe tu código DEBAJO del
//     comentario que dice  "✍️ Tu código aquí".
//  2. Guarda el archivo (Ctrl + S) y recarga la página en el
//     navegador (F5). Mira el resultado en la Consola (F12).
//  3. Compara lo que ves en la consola con el "Resultado esperado".
//  4. Si aparece un error en rojo, lee el número de línea que
//     indica la consola y revisa esa línea.
//  5. NO borres los datos de la tienda (el arreglo productos).
// =============================================================


// -------------------------------------------------------------
//  DATOS DE LA TIENDA DE DON PEDRO (no modificar)
// -------------------------------------------------------------
const productos = [
  { id: 1, nombre: "Arroz 500 g",           categoria: "granos",    precio: 2800, cantidad: 20 },
  { id: 2, nombre: "Fríjol 500 g",          categoria: "granos",    precio: 5200, cantidad: 8 },
  { id: 3, nombre: "Leche 1 L",             categoria: "lacteos",   precio: 4200, cantidad: 12 },
  { id: 4, nombre: "Queso campesino 250 g", categoria: "lacteos",   precio: 7800, cantidad: 4 },
  { id: 5, nombre: "Pan tajado",            categoria: "panaderia", precio: 6500, cantidad: 5 },
  { id: 6, nombre: "Jabón de loza",         categoria: "aseo",      precio: 3500, cantidad: 0 },
  { id: 7, nombre: "Gaseosa 1.5 L",         categoria: "bebidas",   precio: 5900, cantidad: 10 }
];

console.log("===== RETOS DE NIVELACIÓN – MI TIENDA DE BARRIO =====");


// -------------------------------------------------------------
//  RETO 1 – Variables con let y const
// -------------------------------------------------------------
//  a) Crea una constante llamada nombreTienda con el valor "Tienda Don Pedro".
//  b) Crea una variable llamada ventasDelDia con el valor 0.
//  c) Suma 15000 a ventasDelDia (una venta) y luego suma 8500 (otra venta).
//  d) Muestra en consola, usando plantilla de texto (comillas invertidas ` `):
//
//  Resultado esperado:
//  Tienda Don Pedro vendió hoy $23500

console.log("--- Reto 1 ---");
// ✍️ Tu código aquí
const nombreTienda = "Tienda Don Pedro";
let ventasDelDia = 0;
ventasDelDia += 15000;
ventasDelDia += 8500;

console.log(`${nombreTienda} vendió hoy $${ventasDelDia}`);
// -------------------------------------------------------------
//  RETO 2 – Función flecha que calcula el IVA
// -------------------------------------------------------------
//  a) Crea una función flecha llamada calcularIVA que reciba un precio
//     y RETORNE el 19 % de ese precio  (precio * 0.19).
//  b) Llama la función con el precio 10000 y muestra el resultado.
//
//  Resultado esperado:
//  El IVA de $10000 es $1900

console.log("--- Reto 2 ---");
// ✍️ Tu código aquí
function calcularIVA(precio) {
  return precio * 0.19;
}

const precio = 10000;
const iva = calcularIVA(precio);
console.log(`El IVA de $${precio} es $${iva}`);




// -------------------------------------------------------------
//  RETO 3 – Función flecha con dos parámetros
// -------------------------------------------------------------
//  a) Crea una función flecha llamada aplicarDescuento que reciba
//     un precio y un porcentaje, y RETORNE el precio con el descuento.
//     Pista: precio - (precio * porcentaje / 100)
//  b) Muéstrala con el precio 6500 y el porcentaje 10.
//
//  Resultado esperado:
//  Pan tajado con 10% de descuento: $5850

console.log("--- Reto 3 ---");
// ✍️ Tu código aquí
function aplicarDescuento(precio, porcentaje) {
  return precio - (precio * porcentaje / 100);
}

const precioPan = 6500;
const porcentajeDescuento = 10;
const precioConDescuento = aplicarDescuento(precioPan, porcentajeDescuento);
console.log(`Pan tajado con ${porcentajeDescuento}% de descuento: $${precioConDescuento}`);


// -------------------------------------------------------------
//  RETO 4 – Agregar un producto con push
// -------------------------------------------------------------
//  a) Agrega al arreglo productos este nuevo producto:
//     id: 8, nombre: "Café 250 g", categoria: "granos", precio: 9800, cantidad: 6
//  b) Muestra cuántos productos tiene ahora la tienda (usa .length).
//
//  Resultado esperado:
//  La tienda tiene 8 productos

console.log("--- Reto 4 ---");
// ✍️ Tu código aquí
const nuevoProducto = { id: 8, nombre: "Café 250 g", categoria: "granos", precio: 9800, cantidad: 6 };
productos.push(nuevoProducto);
console.log(`La tienda tiene ${productos.length} productos`);


// -------------------------------------------------------------
//  RETO 5 – Buscar un producto con find
// -------------------------------------------------------------
//  a) Usa find para buscar el producto cuyo nombre sea "Leche 1 L".
//  b) Guarda el resultado en una constante llamada leche.
//  c) Muestra su precio y su cantidad.
//
//  Resultado esperado:
//  Leche 1 L: precio $4200, quedan 12 unidades

console.log("--- Reto 5 ---");
// ✍️ Tu código aquí
const leche = productos.find(producto => producto.nombre === "Leche 1 L");
if (leche) {
  console.log(`${leche.nombre}: precio $${leche.precio}, quedan ${leche.cantidad} unidades`);
} else {
  console.log("Producto no encontrado");
}

// -------------------------------------------------------------
//  RETO 6 – ¿Y si el producto no existe? (find + if)
// -------------------------------------------------------------
//  a) Usa find para buscar el producto con id 99.
//  b) Si NO lo encuentra (el resultado es undefined), muestra
//     "Producto no encontrado". Si lo encuentra, muestra su nombre.
//
//  Resultado esperado:
//  Producto no encontrado

console.log("--- Reto 6 ---");
// ✍️ Tu código aquí

const productoNoExistente = productos.find(producto => producto.id === 99);
if (productoNoExistente) {
  console.log(`Producto encontrado: ${productoNoExistente.nombre}`);
} else {
  console.log("Producto no encontrado");
}

// -------------------------------------------------------------
//  RETO 7 – Filtrar productos baratos con filter
// -------------------------------------------------------------
//  a) Usa filter para obtener los productos que cuestan MENOS de 5000.
//  b) Muestra cuántos son y luego el arreglo completo.
//
//  Resultado esperado:
//  Productos de menos de $5000: 3
//  (luego se ve el arreglo con Arroz 500 g, Leche 1 L y Jabón de loza)

console.log("--- Reto 7 ---");
// ✍️ Tu código aquí

const productosBaratos = productos.filter(producto => producto.precio < 5000);
console.log(`Productos de menos de $5000: ${productosBaratos.length}`);
console.log(productosBaratos);


// -------------------------------------------------------------
//  RETO 8 – Productos agotados con filter
// -------------------------------------------------------------
//  a) Usa filter para obtener los productos cuya cantidad sea 0.
//  b) Muestra el nombre de cada producto agotado.
//
//  Resultado esperado:
//  Agotado: Jabón de loza

console.log("--- Reto 8 ---");
// ✍️ Tu código aquí
const productosAgotados = productos.filter(producto => producto.cantidad === 0);
for (const producto of productosAgotados) {
  console.log(`Agotado: ${producto.nombre}`);
}


// -------------------------------------------------------------
//  RETO 9 – Lista de nombres con map
// -------------------------------------------------------------
//  a) Usa map para crear un arreglo nuevo SOLO con los nombres
//     de los productos.
//  b) Muéstralo en consola.
//
//  Resultado esperado (8 nombres, porque en el reto 4 agregaste el café):
//  ["Arroz 500 g", "Fríjol 500 g", "Leche 1 L", "Queso campesino 250 g",
//   "Pan tajado", "Jabón de loza", "Gaseosa 1.5 L", "Café 250 g"]

console.log("--- Reto 9 ---");
// ✍️ Tu código aquí
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);


// -------------------------------------------------------------
//  RETO 10 – Valor total del inventario (for...of + acumulador)
// -------------------------------------------------------------
//  a) Crea una variable valorTotal con el valor 0.
//  b) Recorre el arreglo productos con for...of.
//  c) En cada vuelta suma  precio * cantidad  a valorTotal.
//  d) Muestra el resultado.
//
//  Resultado esperado:
//  Valor total del inventario: $329500

console.log("--- Reto 10 ---");
// ✍️ Tu código aquí

let valorTotal = 0;
for (const producto of productos) {
  valorTotal += producto.precio * producto.cantidad;
}

console.log(`Valor total del inventario: $${valorTotal}`);

// -------------------------------------------------------------
//  ⭐ RETO EXTRA (opcional) – Vender un producto
// -------------------------------------------------------------
//  Crea una función flecha venderProducto(id, unidades) que:
//   1. Busque el producto por id con find.
//   2. Si no existe, muestre "Producto no encontrado".
//   3. Si no hay suficientes unidades, muestre "No hay suficiente cantidad".
//   4. Si todo está bien, reste las unidades a la cantidad y muestre
//      "Venta realizada. Quedan X unidades de NOMBRE".
//  Pruébala con: venderProducto(4, 2), venderProducto(4, 10) y venderProducto(50, 1)
//
//  Resultado esperado:
//  Venta realizada. Quedan 2 unidades de Queso campesino 250 g
//  No hay suficiente cantidad
//  Producto no encontrado

console.log("--- Reto extra ---");
// ✍️ Tu código aquí
function venderProducto(id, unidades) {
  const producto = productos.find(p => p.id === id);
  if (!producto) {
    console.log("Producto no encontrado");
    return;
  }
  if (producto.cantidad < unidades) {
    console.log("No hay suficiente cantidad");
    return;
  }
  producto.cantidad -= unidades;
  console.log(`Venta realizada. Quedan ${producto.cantidad} unidades de ${producto.nombre}`);
}

// Pruebas
venderProducto(4, 2);   // Venta realizada. Quedan 2 unidades de Queso campesino 250 g
venderProducto(4, 10);  // No hay suficiente cantidad
venderProducto(50, 1);  // Producto no encontrado