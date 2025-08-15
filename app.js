//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {

  const campoNome = document.getElementById("amigo");
  const nome = campoNome.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);

  campoNome.value = "";

  console.log("Lista de amigos:", amigos);
  exibirListaAmigos();
}

function exibirListaAmigos() {

  const lista = document.getElementById("listaAmigos");
  
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {

  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const nomeSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Amigo sorteado: <strong>${nomeSorteado}</strong>`;
}
