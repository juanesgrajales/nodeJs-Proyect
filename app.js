import pc from "picocolors";
import {formatearPrecio, formatearNombre} from "./utils/format.js"
import { productos } from "./data/product.js";
import { buscarporId, listarAgotados, valorInventario, listarPorCategoria } from "./services/inventario.js";

console.log("Hello, World! desde node js");//start
console.log("API Mi Tienda de Barrio Aprendiz: Juan Esteban Grjales”");//run dev 

//uso de libreria picocolors para cambiar el color del texto en la consola
console.log(pc.blue("“Bienvenido"));
console.log(pc.red("Error de prueba"));

console.log(formatearPrecio(10400));

console.log(formatearNombre("leche 1 l"));

console.table(productos);
console.log(`la tienda tiene ${productos.length} productos`);

for (const  producto of productos ){
    console.log(producto.nombre+" - $"+ (producto.precio))
}

console.log("producto 3: ", buscarporId(3).nombre);
console.log("Agotados: ",listarAgotados().length);
console.log("Valor del inventario: ",formatearPrecio(valorInventario()))

console.log("Productos de granos:", listarPorCategoria("granos").length);
