// Prueba del módulo de inventario (Misión 2)
import { buscarPorId, listarAgotados, valorInventario, buscarPorNombre, vender } from "./servicios/inventario.js";

console.log("buscarPorId(3):", buscarPorId(3).nombre);
console.log("listarAgotados():", listarAgotados().length, "agotado(s)");
console.log("valorInventario():", valorInventario());
console.log("buscarPorNombre('QUESO'):", buscarPorNombre("QUESO").map((p) => p.nombre));
console.log(vender(3, 2));
console.log(vender(6, 1));
console.log(vender(99, 1));
