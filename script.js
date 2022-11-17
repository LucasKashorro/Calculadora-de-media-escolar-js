let divisaoAno = document.getElementById('divisao-de-ano')
let quantidadeNotas = 2;
let soma = 0;
let resultado = 0;

function addNota() {
    quantidadeNotas++;
    const newNotaContainer = document.createElement('div');
    newNotaContainer.classList.add('nota-container');
    newNotaContainer.id = 'container'+quantidadeNotas;
    document.getElementById('input-container').appendChild(newNotaContainer);
    
    const newInputNota = document.createElement('input');
    newInputNota.id = 'nota'+quantidadeNotas;
    newInputNota.setAttribute('placeholder', 'nota '+quantidadeNotas);
    newInputNota.setAttribute('type', 'number');
    document.getElementById('container'+quantidadeNotas).appendChild(newInputNota);

    const newExcluirBtn = document.createElement('button');
    newExcluirBtn.id = quantidadeNotas;
    newExcluirBtn.classList.add('excluir-btn');
    newExcluirBtn.setAttribute('onClick', 'excluirNota(this.id)');
    newExcluirBtn.innerHTML = 'X'
    document.getElementById('container'+quantidadeNotas).appendChild(newExcluirBtn);
}

function excluirNota(id) {
    quantidadeNotas--;
    document.getElementById('container'+id).parentNode.removeChild(document.getElementById('container'+id));
}

// function calcular() {
//     for(var i = 0; i < quantidadeNotas+1; i++) {
//         soma += document.getElementById('nota'+i).value;    
//         document.getElementById('output').innerHTML = soma/quantidadeNotas;
//     }

// }