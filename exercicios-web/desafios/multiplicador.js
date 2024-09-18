function multiplicar(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0
    return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador-1)
    }
    console.log('RESOLUÇÃO COD3R')
    console.log(multiplicar(5, 5)) 
    console.log(multiplicar(0, 7))

function multiplicador2(numero2, multiplica){
    let resultado = 0
    for(let i = 0; i < multiplica; i++){
        resultado += numero2
    }
    return resultado
}
console.log('RESOLUÇÃO RENATO')
    console.log(multiplicador2(5, 5)) 
    console.log(multiplicador2(0, 7))