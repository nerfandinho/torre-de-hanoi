const game = document.getElementById("game"),
    main = document.querySelector("main"),
    buttons = document.getElementById("buttons");

let numJogadas = 0;

function criaJogo(numeroDeBlocos = 3) {
    const playCount = document.createElement("div"),
        p = document.createElement("p"),
        span = document.createElement("span");

    p.innerText = "Número de jogadas: ";

    span.innerText = numJogadas;
    span.id = "numJogadas";

    playCount.id = "playCount";
    playCount.appendChild(p);
    playCount.appendChild(span);

    main.prepend(playCount);

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
let ultimaDificuldade = 3;

function criaResetButton() {
    const resetButton = document.createElement("button");

    resetButton.id = "reset";
    resetButton.innerText = "Resetar jogo";
    resetButton.addEventListener("click", () => (resetaJogo(ultimaDificuldade)));

    buttons.appendChild(resetButton);
}
criaResetButton();

// Função que cria uma alterador de dificuldade
function criaDifficultyChanger() {
    const confirmButton = document.createElement("button"),
        box = document.createElement("div"),
        span = document.createElement("span");

    span.innerText = "Escolha a sua dificuldade: "
    box.appendChild(span);

    for (let options = 3; options <= 5; options++) {
        const option = document.createElement("input"),
            label = document.createElement("label");

        option.type = "radio";
        option.value = options;
        option.name = "num-discos";

        label.innerText = `${options} discos`;

        label.prepend(option);
        box.appendChild(label);
    }

    confirmButton.id = "confirm";
    confirmButton.innerText = "Confirmar";

    confirmButton.addEventListener("click", mudaDificuldade);

    box.appendChild(confirmButton);

    buttons.appendChild(box);
}
criaDifficultyChanger();

const selection = document.getElementsByName("num-discos");

function mudaDificuldade() {
    for (let i in selection) {
        if (selection[i].checked) {
            ultimaDificuldade = selection[i].value;
            break;
        }
    }

    resetaJogo(ultimaDificuldade);
}

let mao = '';

function resetaJogo(numeroDeBlocos = 3) {
    document.getElementById("game").innerHTML = "";
    document.getElementById("playCount").remove();

    criaJogo(numeroDeBlocos);
    mao = '';
    numJogadas = 0;
}

function moveBloco(evt) {
    let colunaCLicada = evt.currentTarget;
    let ultimoBloco = colunaCLicada.lastElementChild;
    if (mao === '') {
        mao = ultimoBloco;
    }
    if (mao !== ultimoBloco) {
        colunaCLicada.appendChild(mao);
        mao = '';

        contaJogada();
    }
}

function contaJogada() {
    numJogadas++;
    document.getElementById("numJogadas").innerHTML = numJogadas;
}