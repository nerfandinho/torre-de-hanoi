const game = document.getElementById("game"),
    main = document.querySelector("main"),
    buttons = document.getElementById("buttons");

function criaJogo(numBlocos = 3) {
    for (let torre = 1; torre <= 3; torre++) {
        const div = document.createElement("div");

        // Pode-se mudar o nome da função depois
        div.addEventListener("click", moveBloco);

        div.id = `pin${torre}`;
        game.appendChild(div);
    }

    const comeco = document.getElementById("pin1");
    for (let block = 1; block <= numBlocos; block++) {
        const bloco = document.createElement("div");

        bloco.id = `block${block}`;
        comeco.appendChild(bloco);
    }
}
criaJogo();

// Função que cria um botão para resetar a partida
function criaResetButton() {
    const resetButton = document.createElement("button");

    resetButton.id = "reset";
    resetButton.innerText = "Resetar jogo";
    resetButton.addEventListener("click", resetaJogo);

    buttons.appendChild(resetButton);
}
criaResetButton();

// Função que cria uma alterador de dificuldade
function criaDifficultyChanger() {
    const confirmButton = document.createElement("button"),
        box = document.createElement("div");

    for (let options = 3; options <= 5; options++) {
        const option = document.createElement("input"),
              label = document.createElement("label");

        option.type = "radio";

        label.innerText = `${options} discos`;

        option.id = options;

        box.appendChild(option);
        box.appendChild(label);
    }

    confirmButton.id = "confirm";
    confirmButton.innerText = "Confirmar";

    confirmButton.addEventListener("click", resetaJogo);

    box.appendChild(confirmButton);

    buttons.appendChild(box);
}
criaDifficultyChanger();

function resetaJogo(numBlocos = 3) {
    document.getElementById("game").innerHTML = "";
    criaJogo(numBlocos);
}

function moveBloco() {

}