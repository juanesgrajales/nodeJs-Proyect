import os from "node:os";

console.log("Equipo:", os.hostname());
console.log("Usuario:", os.userInfo().username);
console.log("Sistema:", os.type());
console.log("Procesadores:", os.cpus().length);
console.log("Memoria total (GB):", (os.totalmem() / 1024 ** 3).toFixed(1));

console.log("Memoria libre (GB):", (os.freemem() / 1024 ** 3).toFixed(1));