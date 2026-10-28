// =============================================================
//  MISIÓN 5 – CIERRE DE CAJA
//  Aprendiz: ___Juan Esteban Grajales__
//  Ejecútala con:  node cierre.js   (primero haz ventas con vender.js)
// =============================================================
import fs from "node:fs";

if (!fs.existsSync("ventas.txt")) {
  console.log("Aún no hay ventas registradas. Usa primero vender.js");
} else {
  // PASO 1: Lee ventas.txt con fs.readFileSync(..., "utf8")
  // PASO 2: Separa el texto en líneas:  contenido.trim().split("\n")
  // PASO 3: Crea dos acumuladores en 0: unidadesTotales y totalDia
  // PASO 4: Recorre las líneas con for...of. En cada línea:
  //         const partes = linea.split(" | ");
  //         partes[2] son las unidades   → súmalas con Number()
  //         partes[3] es el total ("$8400") → quítale el $ con .replace("$", "")
  //                                          y súmalo con Number()
  // PASO 5: Arma el resumen (número de ventas, unidades, total del día),
  //         muéstralo y guárdalo en cierre-caja.txt
  // Tu código aquí

  const contenido = fs.readFileSync("ventas.txt", "utf8");

  const lineas = contenido.trim().split("\n");

  let unidadesTotales = 0;
  let totalDia = 0;

  for (const linea of lineas) {
    const partes = linea.split(" | ");
    unidadesTotales += Number(partes[2]);
    totalDia += Number(partes[3].replace("$", ""));
  }

  const resumen = `===== CIERRE DE CAJA =====
Número de ventas: ${lineas.length}
Unidades vendidas: ${unidadesTotales}
Total del día: $${totalDia}`;

  console.log(resumen);
  fs.writeFileSync("cierre-caja.txt", resumen);
  console.log("Resumen guardado en cierre-caja.txt");
}