# Amigo Secreto 🎁

Neste projeto, você vai encontrar uma aplicação de "Amigo Secreto" (ou "Secret Santa") que permite aos usuários adicionar nomes à lista, e realizar um sorteio aleatório para determinar quem será o "amigo secreto". O projeto proporciona uma maneira simples e divertida de organizar sorteios de amigo secreto online.

## Funcionalidades 🚀

- **Adicionar Nomes**: O usuário pode escrever o nome de um amigo em um campo de texto e adicioná-lo à lista de amigos visível, ao clicar no botão **Adicionar**.
- **Validar Entrada**: Se o campo de texto estiver vazio ou contiver espaços em branco, o programa exibirá um alerta solicitando um nome válido.
- **Visualizar a Lista**: Todos os nomes inseridos são exibidos em uma lista visível na página, permitindo ao usuário acompanhar quem foi adicionado.
- **Sorteio Aleatório**: Ao clicar no botão **Sortear Amigo**, um nome será escolhido aleatoriamente da lista e exibido como o "amigo secreto".
- **Confetes**: Ao adicionar um nome ou ao realizar o sorteio, um efeito visual de confetes será disparado, tornando a experiência mais divertida.

## Tecnologias Utilizadas 🛠️

- **HTML**: Estrutura da página.
- **CSS**: Estilização da página e dos elementos.
- **JavaScript**: Funcionalidades interativas (adicionar amigos, realizar sorteio e disparar confetes).
- **Canvas Confetti**: Biblioteca para criar o efeito visual de confetes.

## Como Usar ⚙️

1. **Clone o Repositório**:

- git clone <https://github.com/Idilom/SorteadorAmigoSecreto.git>

2. **Abra o arquivo HTML no seu navegador**:

- Clique duas vezes no arquivo `index.html` ou abra diretamente em seu navegador preferido.

3. **Adicionar Amigos**:

- Digite o nome de um amigo no campo de entrada e pressione **Enter** ou clique no botão **Adicionar**.
- O nome será adicionado à lista de amigos e o efeito de confetes será disparado.

4. **Sortear um Amigo Secreto**:

- Clique no botão **Sortear Amigo** para escolher aleatoriamente um amigo da lista.
- O nome do amigo sorteado será exibido na tela, junto com confetes para celebrar o momento!

5. **Remover Amigos** (opcional):

- Para remover um amigo da lista, clique no **X** ao lado do nome.

## Personalização 🔧

- **Alterar os Confetes**: Você pode modificar as cores, contagem de particulas e a propagação dos confetes no código JavaScript para personalizar a animação.

```javascript
confetti({
  particleCount: 150,
  spread: 90,
  colors: ["#ff0", "#f00", "#00f"], // Modifique as cores dos confetes aqui
  origin: { y: 0.6 },
});
```

## Recursos Adicionais 🌟

- Biblioteca de Confetes: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

## Licença 📜

Este projeto está licenciado sob a [MIT License.](./LICENSE).
