repetir = function (item, quantidade){
    let resultado = []
    for(let i = 0; i < quantidade; i++)
        resultado.push(item)
    return resultado
}
console.log(repetir("codigo", 5))
console.log(repetir(5 , 5))