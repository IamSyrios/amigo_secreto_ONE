//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
const amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    
    // Validação para garantir que o campo não esteja vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);
    
    // Limpa o campo de entrada
    inputAmigo.value = '';
    
    // Atualiza a lista de amigos na interface
    atualizarListaAmigos();
    
    // Foca novamente no campo de entrada para facilitar a adição de mais nomes
    inputAmigo.focus();
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    // Obtém a referência à lista na interface
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpa a lista atual para evitar duplicações
    listaAmigos.innerHTML = '';
    
    // Percorre o array de amigos e cria os elementos da lista
    for (let i = 0; i < amigos.length; i++) {
        // Cria um novo elemento de lista
        const itemLista = document.createElement('li');
        
        // Cria um span para o número (em preto)
        const numeroSpan = document.createElement('span');
        numeroSpan.textContent = (i + 1) + ") ";
        numeroSpan.style.color = "#00008B";
        
        // Cria um span para o nome do amigo (em azul escuro)
        const nomeSpan = document.createElement('span');
        nomeSpan.textContent = amigos[i];
        nomeSpan.style.color = "#000000"; // Azul escuro
        
        // Adiciona os spans ao item da lista
        itemLista.appendChild(numeroSpan);
        itemLista.appendChild(nomeSpan);
        
        // Adiciona o elemento à lista na interface
        listaAmigos.appendChild(itemLista);
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear.');
        return;
    }
    
    // Gera um índice aleatório baseado no tamanho do array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtém o nome do amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Obtém a referência ao elemento de resultado
    const elementoResultado = document.getElementById('resultado');
    
    // Exibe o resultado do sorteio
    elementoResultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}