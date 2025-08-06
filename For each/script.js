const numeros = [2, 4, 7, 13, 6, 8]
let numerosPares = []

numeros.forEach(function (pegaCadaNumero){

    if(pegaCadaNumero % 2 === 0){
        numerosPares.push(pegaCadaNumero)
    }
})

console.log(numerosPares)