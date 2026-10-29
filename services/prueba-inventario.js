import {
  buscarPorId,
  buscarPorNombre,
  listarAgotados,
  valorInventario,
  vender,
  reabastecer,
} from "./inventario.js";

console.log("Producto con id:", buscarPorId(3));
console.log("Productos agotados:", listarAgotados());
console.log("Valor total del inventario:", valorInventario());
console.log('Resultados de busqueda:', buscarPorNombre("queso"));
console.log("Prueba de venta:");
console.log(vender(3, 2));
console.log(reabastecer(3, 2))
