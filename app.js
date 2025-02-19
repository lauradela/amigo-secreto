
let amigos = []; /*é um array vazio a ser preenchido pelo usuário*/

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('inputAmigos').value; 
    if (nomeAmigo !== '') {
        // Verifica se o nome já foi adicionado, não permite a replicação , mesmo sem aviso
        if (!amigos.includes(nomeAmigo)) {
            amigos.push(nomeAmigo); 
            mostrarAmigos(); 
            document.getElementById('inputAmigos').value = ''; 
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
        /*adiciona o nome a lista de amigos*/
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o amigo sorteado
    document.getElementById('amigoSorteado').textContent = `O amigo sorteado é: ${amigoSorteado}`;
}


