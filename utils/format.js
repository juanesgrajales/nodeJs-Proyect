export const formatearPrecio =(valor)=>{
    return `$ ${valor.toLocaleString("es-CO")}`;
}

export function formatearPrecio2(valor){
    return `${valor}`
}
