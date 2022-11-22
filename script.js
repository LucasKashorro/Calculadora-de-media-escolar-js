let output = document.getElementById('output');
let quantidadeNotas = 2;
let soma = 0;

let arr = [];

//Função que cria novos inputs para que o usuário possa fazer a média com mais notas
function addNota() {
    quantidadeNotas++;
    // Cria um novo container para os elementos que serão criados
    const newNotaContainer = document.createElement('div');
    newNotaContainer.classList.add('nota-container');
    newNotaContainer.id = 'container'+quantidadeNotas;
    document.getElementById('input-container').appendChild(newNotaContainer);
    // Cria um novo Input
    const newInputNota = document.createElement('input');
    newInputNota.id = 'nota'+quantidadeNotas;
    newInputNota.setAttribute('placeholder', 'nota '+quantidadeNotas);
    newInputNota.setAttribute('type', 'number');
    document.getElementById('container'+quantidadeNotas).appendChild(newInputNota);
    // Cria um botão que permite excluir o container que o botão está
    const newExcluirBtn = document.createElement('button');
    newExcluirBtn.id = quantidadeNotas;
    newExcluirBtn.classList.add('excluir-btn');
    newExcluirBtn.setAttribute('onClick', 'excluirNota(this.id)');
    newExcluirBtn.innerHTML = 'X'
    document.getElementById('container'+quantidadeNotas).appendChild(newExcluirBtn);
}

function excluirNota(id) {
    quantidadeNotas--;
    // Botão que exclui o input de nota
    document.getElementById('container'+id).parentNode.removeChild(document.getElementById('container'+id));
}

function calcular() {

    //Adiciona os valores das notas(input) a um array (variável 'arr')
    for(var i = 1; i < quantidadeNotas+1; i++) {
        arr.push(parseFloat(document.getElementById('nota'+i).value));
    }
    //Soma o valor de todos os elementos do array 'arr'
    for(var j = 0; j < arr.length; j++) {
        soma += arr[j];
    }

    // Verifica se todos os inputs foram preenchidos
    if(isNaN(soma)){
        output.innerHTML = 'Insira suas notas para que a média possa ser calculada';
    } else {
        output.innerHTML = 'Sua média foi ' + soma/quantidadeNotas;
    }

    // Reseta os valores das variáveis arr e soma
    for(; arr.length > 0;) {
        arr.shift();
    }
    soma = 0;

}