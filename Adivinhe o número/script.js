function gerarNumeroAleatorio(){
    const numeroAleatorio = Math.floor(Math.random() * 11)
    return numeroAleatorio
}

function jogar(){
    const pegaNumeroAleatorio = gerarNumeroAleatorio()
    console.log(pegaNumeroAleatorio)
}

jogar()