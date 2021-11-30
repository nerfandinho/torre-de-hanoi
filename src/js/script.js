const game = document.getElementById("game");

function criaJogo(numBlocos = 3) {
    for (let torre = 1; torre <= 3; torre++) {
        const div = document.createElement("div");

        // Pode-se mudar o nome da função depois
        div.addEventListener("click", moveBloco);

        div.id = `pin${torre}`;
        principal.appendChild(div);
    }

    const comeco = document.getElementById("pin1");
    for (let block = 1; block <= numBlocos; block++) {
        const bloco = document.createElement("div");

        bloco.id = `block${block}`;
        comeco.appendChild(bloco);
    }
}
criaJogo();

function moveBloco() {
    
}
