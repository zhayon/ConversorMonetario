function analisar() {
    // valor inserido pelo usuario que vai ser manipulado
    let valorVariavel = parseFloat(document.getElementById("valorInicial").value)
    // resultadoFinal: para adinionar no html no final
    let resultadoFinal = ""
    // array com valores de notas e moedas para o for
    let notasMoedas = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05]
    // Numero de notas ou moedas
    let numNotasMoedas

    for (let i of notasMoedas) {
        if (valorVariavel >= i) {
            // Retirando número de notas ou moedas
            numNotasMoedas = Math.floor(valorVariavel / i)
            // Guardando o resto. Arredondando com toFixed e depois convertendo para inteiro para compensar inprecisão do JS
            valorVariavel = parseFloat((valorVariavel % i).toFixed(2))

            // adicionando parte que vai aparecer no HTML, sendo diferente se forem notas, moeda de 1 real ou outras moedas
            if (i > 1) {
                resultadoFinal += "<figure><img src='images/" + i + ".png'></img> <h1>" + numNotasMoedas + " notas de " + i + " reais</h2></figure><br>"
            } else if (i == 1) {
                resultadoFinal += "<figure><img src='images/m" + i + ".png'></img> <h1>" + numNotasMoedas + " moedas de " + i + " real</h2></figure><br>"
            } else if (i > 0.04) {
                resultadoFinal += "<figure><img src='images/m" + i*100 + ".png'></img> <h1>" + numNotasMoedas + " moedas de " + i*100 + " centavos</h2></figure><br>"
            }
        }
    }

    // mensagem caso sobre menos de 5 centavos
    if (valorVariavel > 0) {
      resultadoFinal += "<h3>E ainda sobram " + valorVariavel*100 + " centavos!<br>(do jeito que tá é melhor não desperdiçar nada né?)</h3>"
    }
    
    //  adicionado ao html
    document.getElementById("resultado").innerHTML = resultadoFinal
    
    // Apagando caixa de entrada
    document.getElementById("valorInicial").value = ""
}
