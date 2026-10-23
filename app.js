import pc from "picocolors"
import {formatearPrecio} from "./utils/format.js"
 
console.log("Hello, World! desde node js");//start
console.log("este es el cambio que se hizo en el archivo app.js");//run dev 

console.log(pc.red("Este es un mensaje en rojo usando picocolors"));//uso de libreria picocolors para cambiar el color del texto en la consola

console.log(formatearPrecio(10400));