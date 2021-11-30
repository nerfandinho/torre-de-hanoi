const game = document.getElementById("game"),
main = document.querySelector("main");

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


let mao = '';

function moveBloco(evt) {

    let colunaCLicada = evt.currentTarget;
    let ultimoBloco = colunaCLicada.lastElementChild;
    if(mao === ''){
        mao = ultimoBloco;
    }
    if(mao !== ultimoBloco){
        colunaCLicada.appendChild(mao);
        mao = '';
    }
}


    


