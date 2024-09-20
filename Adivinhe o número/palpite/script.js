function gerarAleatorio(){
    const numeroAleatorio = (Math.floor(Math.random() * 11))
    return numeroAleatorio
}

function jogar() {
    const numero = gerarAleatorio()
    let palpite = ""
    let N = 3

    alert(numero)

    do{
        palpite = parseInt(prompt("adivinhe o número:"))
        if (palpite != numero){
            N--
            alert(`Errrrrrrrrrrrrrrrou! Tenta de novo! Você ainda tem ${N > 1? "tentativas" : "tentativa"}.`)
        }
        else {
            alert(`Parabéns! O número era: ${numero}`)
            return
        }
    }while(N > 0)

        if (N == 0){
            alert("Suas tentativas acabaram")
        }
}

jogar()