    var gasolina = Number(window.prompt('Digite o valor da gasolina:'))
    var alcool = Number(window.prompt('Digite o valor do alcool:'))
    var divisao = Number(gasolina / alcool)
    var resultado = divisao
    var valores = document.write(`Os valores digitados foram ${gasolina.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} para gasolina e ${alcool.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} para o álcool. <br>`) 
    var resultado_write = document.write(`O valor da divisão entre a gasolina e o álcool foi de ${resultado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.<br>`)
        if (resultado > 0.7) document.write(`O combustível mais vantajoso é a gasolina!`);
        if (resultado < 0.7) document.write(`O combustível mais vantajoso é o álcool!`);
        if (resultado == 0.7) document.write(`Tanto faz abastecer com um ou outro!`);  
