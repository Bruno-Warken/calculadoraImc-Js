let pesoKG = document.querySelector('input#pesoKG');
let alturaCM = document.querySelector('input#alturaCM');
let resultado = document.querySelector('div.resultado');

function calcular(){
    let peso = pesoKG.value;
    let altura = alturaCM.value;

    // Verifica se as strings dos campos de entrada estão vazias antes de converte-las para números
    if (peso.trim() === "" || altura.trim() === "" || isNaN(altura) || isNaN(peso)) {
        window.alert("Por gentileza, informe um valor válido para os campos!");
    }else if (peso <= 0 || altura <= 0){
        window.alert("O valor informado é menor ou igual a 0. Por gentileza, informe outro valor!");
    }else{

        // Converte os valores de peso e altura para número
        peso = Number(peso);
        altura = Number(altura);

        let alturaM = altura / 100;

        let imc = peso / (alturaM**2);
        let varTeste;

        if (imc < 18.5){
            varTeste = 'Você está abaixo do peso.';
        }else if(imc < 25){
            varTeste = 'Você está com o peso adequado.';
        }else if(imc < 30){
            varTeste = 'Você está com sobrepeso.';
        }else{
            varTeste = 'Você está com obesidade.'
        }

    // Limpa o resultado anterior para que ao realizar uma nova consulta, apenas o novo resultado seja mostrado
    resultado.innerHTML = "";

    // Cria um elemento de parágrafo para exibir o resultado
    let resultadoElemento = document.createElement("p");

    // Adiciona o elemento de paragráfo na div "resultado"
    resultadoElemento.textContent = `Seu IMC é de ${imc.toFixed(2)}. ${varTeste}` 
    resultado.appendChild(resultadoElemento);

    } 
}