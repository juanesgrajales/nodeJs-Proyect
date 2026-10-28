// =============================================================
//  SESIÓN 2 – MI PRIMER PROGRAMA CON NODE.JS
//  Ejecútalo en la terminal con:   node hola.js
// =============================================================

console.log("¡Hola desde Node.js!");
console.log("Hoy es:", new Date().toLocaleDateString("es-CO"));
console.log("Versión de Node:", process.version);

// En Node.js NO existe la ventana del navegador:
console.log("¿Existe window?", typeof window);
