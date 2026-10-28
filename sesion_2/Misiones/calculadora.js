// =============================================================
//  MISIÓN 1 – CALCULADORA DE LA TIENDA
//  Aprendiz: _Juan Esteban Grajales__
//  Pruébala con:  node calculadora.js 2800 3
// =============================================================

// PASO 1: Lee el precio (posición 2) y la cantidad (posición 3) de
//         process.argv y conviértelos a número con Number().
// Tu código aquí


// PASO 2: Si faltan datos (process.argv.length < 4), muestra:
//         Uso: node calculadora.js <precio> <cantidad>
// PASO 3: Si alguno NO es número (usa isNaN), muestra:
//         ERROR: El precio y la cantidad deben ser números
// PASO 4: Si todo está bien, calcula:
//         subtotal = precio * cantidad
//         iva      = Math.round(subtotal * 0.19)
//         total    = subtotal + iva
//         y muestra la "factura" como en la tarjeta de la misión.
// Tu código aquí

const precio = Number(process.argv[2]);
const cantidad = Number(process.argv[3]);

if (process.argv.length < 4) {
  console.log("Uso: node calculadora.js <precio> <cantidad>");
} else if (isNaN(precio) || isNaN(cantidad)) {
  console.log("ERROR: El precio y la cantidad deben ser números");
} else {
  const subtotal = precio * cantidad;
  const iva = Math.round(subtotal * 0.19);
  const total = subtotal + iva;

  console.log("CALCULADORA DE LA TIENDA ");
  console.log(`Precio unitario: $${precio}`);
  console.log(`Cantidad: ${cantidad}`);
  console.log(`Subtotal: $${subtotal}`);
  console.log(`IVA (19%): $${iva}`);
  console.log(`TOTAL A PAGAR: $${total}`);
}