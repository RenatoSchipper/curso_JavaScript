function inverso(valor){

   const tipo = typeof valor

   if(tipo == "boolean") return console.log(!valor)
   else if(tipo == "number") return console.log(-valor)
   else 
   return `booleano ou número esperado, mas o parâmetro é do tipo ${tipo}`
}
inverso(true)
inverso("6")
