// =============================================================
//  MISIÓN 2 – FICHA TÉCNICA DEL EQUIPO
//  Aprendiz: __Juan Esteban Grajales____
//  Ejecútala con:  node ficha-equipo.js
// =============================================================
import os from "node:os";
import fs from "node:fs";

// PASO 1: Guarda la fecha y hora actual en una constante llamada fecha
//         (usa new Date().toLocaleString("es-CO")).
// PASO 2: Calcula la memoria total en GB:
//         (os.totalmem() / 1024 ** 3).toFixed(1)
// PASO 3: Arma un texto con plantilla (comillas invertidas) que tenga:
//         título, fecha, equipo, usuario, sistema, procesadores y memoria.
// PASO 4: Muestra el texto con console.log.
// PASO 5: Guarda el texto en un archivo llamado ficha-NOMBRE-DEL-EQUIPO.txt
//         (usa os.hostname() para el nombre) con fs.writeFileSync.
// Tu código aquí


const fecha = new Date().toLocaleString("es-CO");

const memoria = (os.totalmem() / 1024 ** 3).toFixed(1);

const ficha = `===== FICHA TÉCNICA DEL EQUIPO =====
Fecha: ${fecha}
Equipo: ${os.hostname()}
Usuario: ${os.userInfo().username}
Sistema: ${os.type()}
Procesadores: ${os.cpus().length}
Memoria: ${memoria} GB`;
console.log(ficha);

const nombreArchivo = `ficha-${os.hostname()}.txt`;
fs.writeFileSync(nombreArchivo, ficha);
console.log(`Ficha guardada en ${nombreArchivo}`);