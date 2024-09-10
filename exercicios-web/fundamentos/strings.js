const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna letra do index 4(0.1.2.3.(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // pega o indíce (3) busca o valor do "3" e busca código relacionado a tabela unicode
console.log(escola.indexOf('3')) // verifica se tem 3

console.log(escola.substring(1)) //oder
console.log(escola.substring(0, 3)) //Cod

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // Subtitui 3 pelo e

console.log('Ana,Maria,Pedro'.split(',')) //cria um array pegasndo oa valores depois da , 