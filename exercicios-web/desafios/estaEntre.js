    function estaEntre(minimo, maximo, numero,  inclusivo = false){
        if(numero > minimo && numero < maximo || inclusivo == true){
         console.log("true")
        }else  console.log("false")
}
console.log("Esta Entre")
estaEntre(10, 100,50)
estaEntre(16, 100,160)
estaEntre(3, 150,3)
estaEntre(3, 150,3, true)
console.log("\nEsta Entre2")


function estaEntre2(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
    }
    console.log(estaEntre2(10,100,50))
    console.log(estaEntre2(16,100,160))
    console.log(estaEntre2(3,150,3))
    console.log(estaEntre2(3,150,3, true))