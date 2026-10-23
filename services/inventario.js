//consultar el inventario

import { productos } from "../data/product.js"

export const buscarporId = (id) => productos.find((p) => p.id === id);

export const listarAgotados = () => productos.filter((p) => p.cantidad === 0);

export const valorInventario = () => {
    let total = 0;
    for (const p of productos) {
        total = total + p.precio * p .cantidad;
    }
    return total;
}

export const listarPorCategoria = (categoria) =>
    productos.filter((producto) => producto.categoria === categoria);