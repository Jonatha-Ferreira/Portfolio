function imc() {

var peso = parseFloat(prompt('Diga seu peso em Kg: ')).toFixed(2);
var altura = parseFloat(prompt('Digite sua altura em metros(1.74): ')).toFixed(1);
var sexo = prompt('Digite seu sexo "m" (masculino) ou "f" (femenino): ') ;
var imcR = peso/(altura*altura);
var tbIMC = ['','Abaixo do normal','Normal', 'Obesidade leve', 'Obesidade moderada','Obesidade mórbida'] 

  if(sexo != 'm' && sexo != 'f') {
        'dado inválido! digite um novo valor!' + console.log(imc())
      } 
  else { 
  alert('Seu IMC é: ' + imcR.toFixed(2));  
  if (sexo == 'm') {

    if (imcR < 20){
      alert(tbIMC[1])
    }
    else if (imcR < 25) {
      alert(tbIMC[2])
    }
    else if (imcR < 30) {
      alert(tbIMC[3])
    }
    else if (imcR < 40) {
      alert(tbIMC[4])
    }
    else if (imcR > 43) {
      alert(tbIMC[5])
    }
  }

  else if (sexo == 'f') {

      if (imcR < 19){
      alert(tbIMC[1])
    }
    else if (imcR < 24) {
      alert(tbIMC[2])
    }
    else if (imcR < 29) {
      alert(tbIMC[3])
    }
    else if (imcR < 39) {
      alert(tbIMC[4])
    }
    else if (imcR > 39) {
      alert(tbIMC[5])
    }

    };
  };  
}console.log(imc()); 
