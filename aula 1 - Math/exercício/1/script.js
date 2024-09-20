function arredondar(){
    const primeiro_numero = parseFloat(document.getElementById('n1').value)
    const segundo_numero = parseFloat(document.getElementById('n2').value)
    var aparecer = document.getElementById('mostrar')
    let média = (primeiro_numero + segundo_numero)/2
    var round = parseFloat(Math.round(média))
    var ceil = parseFloat(Math.round(média))
    var floor = parseFloat(Math.floor(média))

    aparecer.innerHTML =
        `<h1>Suas média são:</h1>
        <br>
        ${round}
        <br>
        ${ceil}
        <br>
        ${floor}`        
    

        
    
    
}