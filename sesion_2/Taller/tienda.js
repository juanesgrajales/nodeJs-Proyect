// =============================================================
//  SESIÓN 2 – RETO: LA TIENDA EN LA TERMINAL
//  Aprendiz: _Juan Esteban Grajales ___
//  Ejecútalo con:   node --watch tienda.js
// =============================================================
//  1. Muestra el título:  === TIENDA DON PEDRO ===
//  2. Muestra la tabla de productos con console.table(productos)
//  3. Muestra cuántos productos hay (usa length)
//  4. Muestra cuántos productos están agotados (usa filter)
//  5. Muestra el valor total del inventario (usa for...of)
//
//  Resultado esperado (después de la tabla):
//  Total de productos: 7
//  Productos agotados: 1
//  Valor total del inventario: $270700
// =============================================================

const productos = [
  { id: 1, nombre: "Arroz 500 g",           categoria: "granos",    precio: 2800, cantidad: 20 },
  { id: 2, nombre: "Fríjol 500 g",          categoria: "granos",    precio: 5200, cantidad: 8 },
  { id: 3, nombre: "Leche 1 L",             categoria: "lacteos",   precio: 4200, cantidad: 12 },
  { id: 4, nombre: "Queso campesino 250 g", categoria: "lacteos",   precio: 7800, cantidad: 4 },
  { id: 5, nombre: "Pan tajado",            categoria: "panaderia", precio: 6500, cantidad: 5 },
  { id: 6, nombre: "Jabón de loza",         categoria: "aseo",      precio: 3500, cantidad: 0 },
  { id: 7, nombre: "Gaseosa 1.5 L",         categoria: "bebidas",   precio: 5900, cantidad: 10 }
];

// Tu código aquí
console.log("=== TIENDA DON PEDRO ===");

console.table(productos);

console.log(`Total de productos: ${productos.length}`);

const agotados = productos.filter((p) => p.cantidad === 0);
console.log(`Productos agotados: ${agotados.length}`);

let valorTotal = 0;
for (const p of productos) {
  valorTotal += p.precio * p.cantidad;
}
console.log(`Valor total del inventario: $${valorTotal}`);