# amigo_secreto_ONE
Aplicação web para sorteio de amigo secreto referente ao Challenge Amigo Secreto

# Challenge - Amigo Secreto

Um aplicativo web simples para realizar sorteios de amigo secreto. Desenvolvido como parte do Challenge Amigo Secreto da ONE (Oracle Next Education).


## Funcionalidades

O aplicativo permite:

- **Adicionar nomes** à lista de participantes do amigo secreto
- **Visualizar todos os participantes** adicionados em uma lista numerada
- **Realizar um sorteio aleatório** entre os participantes
- **Exibir o resultado** do sorteio na tela

## Como usar


### Adicionando participantes

1. Digite o nome de um participante no campo de texto
2. Clique no botão "Adicionar"
3. O nome será adicionado à lista de participantes, enumarada, abaixo
4. Repita o processo até adicionar todos os participantes

![Demonstração da adição de participante e no topo mensagem informada caso o usuário não informe nenhum nome na caixa](/assets/adicionar.png)


### Realizando o sorteio

1. Depois de adicionar todos os participantes, clique no botão "Sortear amigo"
2. O nome sorteado será exibido abaixo da lista de participantes

![Demonstração do sorteio](/assets/sortear.png)


## 🚀 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro (Vanilla JS)
- Fontes do Google (Inter e Merriweather)


## 🔜 Futuras melhorias

Funcionalidades que podem ser implementadas em versões futuras:

- Verificação de nomes duplicados na lista
- Opção para remover participantes da lista
- Opção para realizar um sorteio de modo que cada vez que o botão "Sortear amigo" seja clicado, uma lista com os amigos já sorteados seja exibida também e a lista dos amigos seja atualizada removendo o membro sorteado. De modo que apenas os membros não sorteados sejam parte do próximo sorteio.
- Opção de inserir o nome dos amigos na lista ao clicar na tecla Enter, e não somente clicar no botão "Adicionar amigos".


## 📝 Processo de desenvolvimento

O projeto foi desenvolvido gradualmente seguindo estas etapas:

1. Criação da estrutura básica (HTML e CSS)
2. Implementação da funcionalidade de receber dados e criar a lista internamente
3. Implementação do sorteio aleatório
4. Exibição visual da lista e do resultado do sorteio
5. Correção do problema de entrada nula com mensagem de alerta
6. Aprimoramentos estéticos:
   - Adição de cor ao texto da lista
   - Inclusão de numeração para melhor visualização
