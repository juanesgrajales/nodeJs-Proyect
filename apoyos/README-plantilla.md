# Mi Tienda de Barrio – API

API para gestionar los productos de la tienda de don Pedro, construida con Node.js.

- **Aprendiz:** Tu Nombre Apellido
- **Ficha:** 3472722 – Tecnólogo en Análisis y Desarrollo de Software (ADSO)
- **Instructora:** Diana Marin Torres

## Cómo instalar

1. Clonar o descargar este repositorio.
2. Abrir una terminal dentro de la carpeta del proyecto.
3. Instalar las dependencias:

```
npm install
```

## Cómo ejecutar

| Comando | ¿Qué hace? |
|---|---|
| `npm start -- todos` | Muestra la tabla con todos los productos |
| `npm start -- agotados` | Muestra los productos agotados |
| `npm start -- buscar leche` | Busca productos por nombre |
| `npm start -- valor` | Muestra el valor total del inventario |
| `npm start -- vender 3 2` | Vende 2 unidades del producto con id 3 |
| `npm run dev` | Ejecuta en modo vigilante (desarrollo) |

## Estructura del proyecto

```
tienda-barrio-api/
├── data/          → datos de la tienda (productos)
├── servicios/     → acciones de la tienda (buscar, vender)
├── utils/         → funciones de ayuda (formatos, IVA)
├── app.js         → programa principal
└── package.json   → información y scripts del proyecto
```

## Estándar de codificación

1. Variables y funciones en **camelCase**: `precioTotal`, `buscarPorId`.
2. Clases en **PascalCase**: `Producto` (a partir de la Sesión 4).
3. Nombres de archivos y carpetas en **minúscula**; si tienen varias palabras, separadas con guion: `ficha-equipo.js`.
4. Sangría de **2 espacios**.
5. Textos con **comillas dobles** `"..."`, y comillas invertidas solo para plantillas de texto.
6. Cada instrucción termina en **punto y coma** `;`.
7. Usar `const` por defecto y `let` solo si el valor cambia.
8. Comentarios en **español**, que expliquen el *para qué* del código.
9. Cada módulo tiene **una sola responsabilidad** (datos, formato, servicios).
10. Mensajes de commit que empiezan con un **verbo** y dicen qué cambió: `Agrega comando vender`.
