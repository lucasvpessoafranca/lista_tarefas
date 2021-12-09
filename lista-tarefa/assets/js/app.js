const inputTarefa = document.querySelector('.inputTarefa')
const btnTarefa = document.querySelector('.btnTarefa')
const tarefas = document.querySelector('.tarefas')


// adicionando ao botao o evento 

btnTarefa.addEventListener('click', function() {
    // console.log(inputTarefa.value);
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);

})

// criando li 

function criaLi() {
    const li = document.createElement('li');
    return li;
}

// fazendo o ENTER funcionar

inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode == 13) {
        // console.log('enter pressionado')
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);

    }
}
)


// Foco no input após o enter 
function limpaInput () {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText+= ' ';
    const botaoApagar = document.createElement('button');
    // botaoApagar.classList.add('btnApagar');
    botaoApagar.setAttribute('class', 'btnApagar');
    botaoApagar.innerText = 'Apagar';
    li.appendChild(botaoApagar)
}


// Função Principal da tarefa

function criaTarefa(textoInput) {
    const li = criaLi();
    li.textContent = textoInput;
    tarefas.appendChild(li).classList.add('tarefaLi');
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}


document.addEventListener('click', function(e) {
    const el = e.target;

    if( el.classList.contains('btnApagar')) {
        console.log('apagar clicado')
        el.parentElement.remove();
        salvarTarefas();
    }
})


function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for( let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}


function adicionaTarefasSalvas() {
    const tarefas  = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(tarefas);
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas()