// Prueba del módulo de formato (Misión 1)
import { formatearPrecio, calcularIVA, totalConIVA } from "./utils/formato.js";

console.log("formatearPrecio(8400):", formatearPrecio(8400));
console.log("calcularIVA(8400):    ", calcularIVA(8400));
console.log("totalConIVA(8400):    ", totalConIVA(8400));
console.log("Factura:", formatearPrecio(totalConIVA(2800 * 3)));
