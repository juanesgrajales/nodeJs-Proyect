export const formatearPrecio =(valor)=>{
    return `$ ${valor.toLocaleString("es-CO")}`;
}

export const totalIVA = (valor) => {
    return valor + calcularIVA(valor);
}

export const calcularIVA = (valor) => {
    return Math.round(valor * 0.19);
}

export const formatearNombre = (texto)=>{
    return `${texto.toUpperCase()}`
}

