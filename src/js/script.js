const principal = document.getElementById("main");

function criaJogo(numBlocos = 3) {
    for (let torre = 1; torre <= 3; torre++) {
        const section = document.createElement("section");

        // Pode-se mudar o nome da função depois
        section.addEventListener("click", moveBloco);

        section.id = `pin${torre}`;
        principal.appendChild(section);
    }

    const comeco = document.getElementById("pin1");
    for (let block = 1; block <= numBlocos; block++) {
        const bloco = document.createElement("div");

        bloco.id = `block${block}`;
        comeco.appendChild(bloco);
    }
}
criaJogo();

function moveBloco(){
    

}

