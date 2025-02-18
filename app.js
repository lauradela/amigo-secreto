let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('inputAmigos').value.trim(); 
    if (nomeAmigo !== '') {
        // Verifica se o nome já foi adicionado
        if (!amigos.includes(nomeAmigo)) {
            amigos.push(nomeAmigo); 
            mostrarAmigos(); 
            document.getElementById('inputAmigos').value = ''; 
        } else {
            alert("Este amigo já foi adicionado.");
        }
    } else {
        alert("Por favor, insira um nome de amigo.");
    }
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    // Sorteia um amigo aleatório da lista
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o amigo sorteado
    document.getElementById('amigoSorteado').textContent = `O amigo sorteado é: ${amigoSorteado}`;
}
