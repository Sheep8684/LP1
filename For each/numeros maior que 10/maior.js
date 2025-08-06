let numeros = [4, 11, 8, 15, 23, 7, 2]
contador = 0

numeros.forEach(function (pegaNumeros){
    if(pegaNumeros > 10){
        contador++
    }
})

console.log(contador)