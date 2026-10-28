// =============================================================
//  MISIÓN 3 – CONSULTAS AL INVENTARIO
//  Aprendiz: _Juan Esteban Grajales___
//  Ejemplos:  node consultar.js todos
//             node consultar.js buscar leche
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

const comando = process.argv[2];
const valor = process.argv[3];

if (comando === "todos") {
  console.table(productos);
}
// PASO 1: comando "agotados" → muestra  AGOTADO: NOMBRE  (usa filter)
// PASO 2: comando "buscar" (y que valor no sea undefined) → busca los productos
//         cuyo nombre contenga el texto, sin importar mayúsculas:
//         p.nombre.toLowerCase().includes(valor.toLowerCase())
//         Si no hay ninguno: No hay productos que contengan "TEXTO"
//         Si hay: Encontrado: NOMBRE: $PRECIO (quedan CANTIDAD)
// PASO 3: comando "categoria" (y que valor no sea undefined) → muestra cuántos
//         productos hay de esa categoría y la tabla con console.table
// PASO 4: cualquier otro caso (else) → muestra la lista de comandos disponibles
// Continúa aquí con else if (...) { ... }

else if (comando === "agotados") {
  const agotados = productos.filter((p) => p.cantidad === 0);
  for (const p of agotados) {
    console.log(`AGOTADO: ${p.nombre}`);
  }
}
else if (comando === "buscar" && valor !== undefined) {
  const encontrados = productos.filter((p) => 
    p.nombre.toLowerCase().includes(valor.toLowerCase())
  );
  if (encontrados.length === 0) {
    console.log(`No hay productos que contengan "${valor}"`);
  } else {
    for (const p of encontrados) {
      console.log(`Encontrado: ${p.nombre}: $${p.precio} (quedan ${p.cantidad})`);
    }
  }
}
else if (comando === "categoria" && valor !== undefined) {
  const catFiltrados = productos.filter((p) => p.categoria === valor);
  console.log(`Productos de ${valor}: ${catFiltrados.length}`);
  console.table(catFiltrados);
}
else {
  console.log("Comandos disponibles:");
  console.log("node consultar.js todos");
  console.log("node consultar.js agotados");
  console.log("node consultar.js buscar <texto>");
  console.log("node consultar.js categoria <nombre>");
}