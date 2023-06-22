function calcular(){

let peso = Number(document.querySelector('input#pesoKG').value);
let altura = Number(document.querySelector('input#alturaCM').value);
let resultado = document.querySelector('p#resultado');

    console.log (peso);
    console.log (altura);

    if (isNaN(altura) || isNaN(peso)) {
        window.alert("Por gentileza, informe um valor válido para os campos!");
    }else if (peso <= 0 || altura <= 0){
        window.alert("O valor informado é menor ou igual a 0. Por gentileza, informe outro valor!");
    }else{

        let alturaM = altura / 100;

        let imc = peso / (alturaM**2);
        let imcClasse;

        if (imc < 18.5){
            imcClasse = 'Você está abaixo do peso.';
        }else if(imc < 25){
            imcClasse = 'Você está com o peso adequado.';
        }else if(imc < 30){
            imcClasse = 'Você está com sobrepeso.';
        }else{
            imcClasse = 'Você está com obesidade.'
        }

    // Adiciona o elemento de paragráfo na div "resultado"
    resultado.textContent = `Seu IMC é de ${imc.toFixed(2)}. ${imcClasse}`;

    }
}