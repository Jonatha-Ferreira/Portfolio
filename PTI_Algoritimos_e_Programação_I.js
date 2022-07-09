function funcao_c(){
// Prompt principal com regra simples de controle de valores.
  var gasolina = prompt('Digite o valor da gasolina:')
  if (gasolina >= 1)  
  var alcool = prompt('Digite o valor do álcool:')
  if (alcool >= 1)
    var divisao = parseFloat(gasolina/alcool)
     else {alert("Valor invalido! Por favor, digite um novo valor!") + console.log(funcao_c())}
// Seta parseFloat nas variáveis gasolina e alcool.
  var gasolina = parseFloat(gasolina);
  var alcool = parseFloat(alcool);
//
  var resultado = divisao
// Informa os valores digitados da gasolina e do álcool.    
  var valores = alert(`Os valores informados foram 
  ${gasolina.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} para gasolina e ${alcool.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} para o álcool.`)    
// Informa o resultado da divisão.
  var resultado_write = alert(`O valor calculado foi de ${resultado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`)
    if (resultado > 0.7) alert(`O combustível mais vantajoso é a gasolina!`);
    if (resultado < 0.7) alert(`O combustível mais vantajoso é o álcool!`);
    if (resultado == 0.7) alert(`Tanto faz abastecer com um ou outro!`);  
// Retorna a função caso desejado.
  var retorno = prompt("Se deseja iniciar um novo cálculo, digite: (sim).")
    if (retorno == "sim") return funcao_c()
     else console.clear();
};
console.log(funcao_c())
