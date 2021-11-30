const game = document.getElementById("game"),
    main = document.querySelector("main"),
    buttons = document.getElementById("buttons");

function criaJogo(numeroDeBlocos = 3) {
    document.getElementById("game").innerHTML = "";

    for (let torre = 1; torre <= 3; torre++) {
        const div = document.createElement("div");

        // Pode-se mudar o nome da função depois
        div.addEventListener("click", moveBloco);

        div.id = `pin${torre}`;

        if (torre === 1) {
            for (let block = 1; block <= numeroDeBlocos; block++) {
                const bloco = document.createElement("div");

                bloco.id = `block${block}`;
                div.appendChild(bloco);
            }
        }

        game.appendChild(div);
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

    confirmButton.addEventListener("click", () => {
        resetaJogo(3);
    });

    box.appendChild(confirmButton);

    buttons.appendChild(box);
}
criaDifficultyChanger();

function resetaJogo(numeroDeBlocos = 3) {
    criaJogo(numeroDeBlocos);
}

let mao = '';



function moveBloco(evt) {

    let colunaCLicada = evt.currentTarget;
    let ultimoBloco = colunaCLicada.lastElementChild;
    // if(ultimoBloco){
    //     let tamanhoBloco = ultimoBloco.clientWidth;
    // }
    
    if (mao === '') {
        mao = ultimoBloco ;
    }

    else if (mao !== ultimoBloco) {
        tamanhoBloco(mao, colunaCLicada, ultimoBloco);
        mao = '';
    }
}

function tamanhoBloco(mao, colunaCLicada, ultimoBloco){
    

    
    if((colunaCLicada.lastElementChild === null) || (mao.clientWidth < ultimoBloco.clientWidth)){
        colunaCLicada.appendChild(mao);
    }
    else{
        alert("Movimento inválido!")
    }

}