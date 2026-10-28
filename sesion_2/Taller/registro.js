import fs from "node:fs";

const nombre = process.argv[2];

if (!nombre) {
  console.log("Escribe tu nombre. Ejemplo: node registro.js Diana");
} else {
  const hora = new Date().toLocaleTimeString("es-CO");
  
  fs.appendFileSync("asistencia.txt", `${nombre} llegó a las ${hora}\n`);

  const contenido = fs.readFileSync("asistencia.txt", "utf8");
  const asistentes = contenido.trim().split("\n");

  console.log(`Registrado: ${nombre}. Asistentes hasta ahora: ${asistentes.length}`);
}