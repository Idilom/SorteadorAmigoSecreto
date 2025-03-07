let amigos = [];

function adicionarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let nomeAmigo = inputAmigo.value.trim();

  if (nomeAmigo === "") {
    alert("Digite o nome de um amigo!");
    inputAmigo.value = "";
    inputAmigo.focus();
    return;
  }

  if (amigos.includes(nomeAmigo)) {
    alert("Este amigo já foi adicionado!");
    inputAmigo.value = "";
    inputAmigo.focus();
    return;
  }

  amigos.push(nomeAmigo);
  inputAmigo.value = "";
  inputAmigo.focus();
  atualizarLista();
  resultado.innerHTML = "";
}

function atualizarLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    let item = document.createElement("li");
    item.innerHTML = `${amigo} <button class="remover" onclick="removerAmigo('${amigo}')">✖</button>`;
    listaAmigos.appendChild(item);
  });

  let contador = document.getElementById("contador");
  contador.innerHTML = `Total de amigos: ${amigos.length}`;
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Lista vazia, por favor digite um nome!");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let sorteado = amigos.splice(indiceSorteado, 1)[0]; // Remove o sorteado da lista

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;

  atualizarLista();
  dispararConfetes();
}

//Adiciona a habilidade de remover um Amigo
function removerAmigo(nome) {
  amigos = amigos.filter((amigo) => amigo !== nome);
  atualizarLista();
}

//Tecla enter adiciona o nome
document.getElementById("amigo").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    adicionarAmigo();
  }
});

//Confetti
function dispararConfetes() {
  confetti({
    particleCount: 1000,
    spread: 500,
    origin: { y: 0.6 },
  });
  document.getElementById("audioSorteio").play();
}
