const game = document.getElementById("game"),
    main = document.querySelector("main"),
    buttons = document.getElementById("buttons");

let numJogadas = 0;

function criaJogo(numeroDeBlocos = 3) {
    numJogadas = 0;

    const playCount = document.createElement("div"),
        p = document.createElement("p"),
        span = document.createElement("span"),
        madeira = document.createElement("div");

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
    buttons.appendChild(span);

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
    buttons.appendChild(box);

    confirmButton.id = "confirm";
    confirmButton.innerText = "Confirmar";

    confirmButton.addEventListener("click", mudaDificuldade);

    buttons.appendChild(confirmButton);
}
criaDifficultyChanger();

const selection = document.getElementsByName("num-discos");

function mudaDificuldade() {
    for (let i in selection) {
        if (selection[i].checked) {
            ultimaDificuldade = Number(selection[i].value);
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
}

// Função para mover os blocos

function moveBloco(evt) {
    let colunaCLicada = evt.currentTarget;
    let ultimoBloco = colunaCLicada.lastElementChild;

    if (mao === null) {
        mao = ''
    }

    if (mao === '') {
        mao = ultimoBloco;
    } else if (mao !== ultimoBloco) {
        tamanhoBloco(mao, colunaCLicada, ultimoBloco);
        mao = '';

        contaJogada();
        vitoria();
    }
}

//Função verificar o tamanho dos blocos

function tamanhoBloco(mao, colunaCLicada, ultimoBloco) {


    if ((colunaCLicada.lastElementChild === null) || (mao.clientWidth < ultimoBloco.clientWidth)) {
        colunaCLicada.appendChild(mao);
    } else {
        popUp('Movimento inválido', 'O disco selecionado é maior que o da pilha escolhida!');
    }
}


//Função verificar vitória
function vitoria() {
    const coluna3 = document.getElementById('pin3');
    const contadorFilhos = coluna3.childElementCount;

    if (contadorFilhos === ultimaDificuldade) {
        popUp('Parabéns, você venceu!', 'Continue jogando e tente bater seu record');
         const removerEvento = document.querySelectorAll('#pin1, #pin2, #pin3');
         removerEvento.forEach((item) => item.removeEventListener("click", moveBloco));
    }
}


//Function contar as jogadas

function contaJogada() {
    numJogadas++;
    document.getElementById("numJogadas").innerHTML = numJogadas;
}

function popUp(situacao = "Situação", mensagem = "Pequena mensagem a ser mostrada!") {
    const popUp = document.createElement("div"),
        span = document.createElement("span"),
        p = document.createElement("p");

    popUp.classList.add("pop-up");
    popUp.setAttribute("animation", "popupIn");

    span.innerText = situacao;
    popUp.appendChild(span);

    p.innerText = mensagem;
    popUp.appendChild(p);

    document.body.prepend(popUp);

    setTimeout(() => {
        popUp.setAttribute("animation", "popupOut");
        setTimeout(() => {
            popUp.remove();
        }, 500);
    }, 2000);
}