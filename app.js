let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = "";

    
    atualizarLista();
}


function atualizarLista() {
    const lista = document.getElementById('listaAmigos');

    
    lista.innerHTML = "";

    
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    resultado.innerHTML = `O amigo sorteado é: <strong>${amigos[indiceAleatorio]}</strong>`;
}