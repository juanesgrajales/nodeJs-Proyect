import { totalIVA, calcularIVA, formatearPrecio, aplicarDescuento } from "./format.js";

let valor=8400;

console.log(`formatear precio es: ${formatearPrecio(valor)}`)
console.log(`Calcular iva es: ${calcularIVA(valor)}`)
console.log(`Tota IVA es: ${totalIVA(valor)}`)
console.log(`factura: ${totalIVA(valor)}`)
console.log(`el escuento es de: ${aplicarDescuento(6500, 10)}`)

