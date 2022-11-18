var largura = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
var altura = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
console.log(altura);
console.log(largura);

let TIMER = "";
let VELOCIDADE = 0;
let PONTOS = 0;
let SCORE = document.querySelector(".score");
let CONTAR = 0;
let BOTAOINICIAR = document.querySelector(".iniciar");
let INICIO = false;
let REINICIO = document.querySelector(".reiniciar")
let RECORDE = document.querySelector(".recorde");
let FUNDO = document.querySelector(".fundo");
let DIVPONTOS = document.querySelector(".mostrarPontos");

div2.style.animationPlayState = "paused";

SCORE.style.display = "none";

let speed2 = "1s"
let speed3 = "0.8s"
let speed4 = "0.95s"

if (largura < 500 && largura > 400) {

    div2.style.animationDuration = speed4;

}

if (largura < 400 && largura > 320) {

    div2.style.animationDuration = speed3;

}

if (largura > 600) {

    console.log("bah")
    div2.style.animationDuration = speed4

}
// mover cursor 2 - automático

// Mover cursor 1  - através dos botões
function iniciar() {

    JAFOICLICADO = true;

    FUNDO.style.backgroundImage = "url('./icon/fundoroxo.jpg')";

    DIVPONTOS.style.display = "none"

    div2.style.animationPlayState = "running";

    setTimeout(function libera() {
        JAFOICLICADO = false;

    }, 100);

    clicarBotao();

    CONTARPONTOS();

    PARARLOCALSTORAGE = false

    SCORE.style.display = "block";
    BOTAOINICIAR.style.display = "none";

    MUSICADEFUNDO.play();
    MUSICADEFUNDO.volume = 1;

    if (CONTADOR != 0) {

        para();
    }

}

function move(Direcao) {

    if (CONTADOR != 0) {

        para();
    }

    if (Direcao == "acima") {
        TIMER = setInterval("acima()", 30);

        CONTADOR++;

        SCORE++;

    }

    if (largura < 2220) {

        clearInterval(TIMER);
        TIMER = setInterval("acima()", 8);

    }

    if (largura > 720 && largura < 800) {

        clearInterval(TIMER);
        TIMER = setInterval("acima()", 0.3);

    }

    if(largura > 800 && largura < 1200);


    clearInterval(TIMER);
    TIMER = setInterval("acima()", 0.1);

}

///Realiza o pulo

function acima() {
    let div1Top = parseInt(getComputedStyle(div1).top);
    SOMPULO.play();

    div1.style.top = div1Top - 5;
    if (div1Top <= 0) {
        clearInterval(TIMER)
        TIMER = setInterval("baixo()", 33);

    }

}

/// Ao alcançar o teto, boneco desce

function baixo() {
    let DIV1TOP = parseInt(getComputedStyle(div1).top);
    let FUNDOHEIGHT = parseInt(getComputedStyle(chao).height) - 15;
    let DIV1HEIGHT = parseInt(getComputedStyle(div1).height);

    if (largura > 600) {


        FUNDOHEIGHT = parseInt(getComputedStyle(chao).height) - 25;
        div1.style.top = DIV1TOP + 20;

    } else {

        div1.style.top = DIV1TOP + 10;

    }
    if (DIV1TOP >= FUNDOHEIGHT) {
        clearInterval(TIMER);

        JAFOICLICADO = false;

    }
}

// Parar cursores
function para2() {
    clearInterval(M);
}

function para() {
    clearInterval(TIMER);

}

function colisao() {
    let DIV1LEFT = parseInt(getComputedStyle(div1).left);
    let DIV1TOP = parseInt(getComputedStyle(div1).top);
    let DIV1HEIGHT = parseInt(getComputedStyle(div1).height);
    let DIV1WIDTH = parseInt(getComputedStyle(div1).width);

    let DIV2LEFT = parseInt(getComputedStyle(div2).left);
    let DIV2TOP = parseInt(getComputedStyle(div2).top);
    let DIV2HEIGHT = parseInt(getComputedStyle(div2).height);
    let DIV2WIDTH = parseInt(getComputedStyle(div2).width);

    let FUNDOHEIGHT = parseInt(getComputedStyle(FUNDO).height);
    let FUNDOWIDTH = parseInt(getComputedStyle(FUNDO).width);

    if (((DIV1LEFT >= DIV2LEFT) && (DIV1LEFT <= DIV2LEFT + DIV2WIDTH)) &&
        ((DIV1TOP >= DIV2TOP) && (DIV1TOP <= DIV2TOP + DIV2HEIGHT))) {
        para2();
        para();
        clicarBotao();
        INICIO = true;
        VELOCIDADE = 0;
        pontuacaoStorage();
        pontosarmazenados2 = true
        botaoreiniciar();
        mostrarPontos();
        DIVPONTOS.style.display = "block"
        recordes();
        MUSICADEFUNDO.pause();
        MUSICADEFUNDO.currentTime = 0;
        chao.style.top = 60 + "%"

    }
    if (((DIV2LEFT >= DIV1LEFT) && (DIV2LEFT <= DIV1LEFT + DIV1WIDTH)) &&
        ((DIV2TOP >= DIV1TOP) && (DIV2TOP <= DIV1TOP + DIV1HEIGHT))) {
        para2();
        para();
        clicarBotao();
        INICIO = true;
        VELOCIDADE = 0;
        DIVPONTOS.style.display = "block"
        mostrarPontos();
        pontuacaoStorage();
        chao.style.top = 60 + "%"
        pontosarmazenados2 = true
        botaoreiniciar();
        recordes();
        MUSICADEFUNDO.pause();
        MUSICADEFUNDO.currentTime = 0;
    }
}

function CONTARPONTOS() {

    pontadas = setInterval((pontadas) => {

        CONTAR++;
        SCORE.innerHTML = "SCORE: " + CONTAR;

    }, 150);

}

var PARARLOCALSTORAGE = false;

function pontuacaoStorage() {

    if (!PARARLOCALSTORAGE) {

        var PEGARPONTOSPARASTORAGE = CONTAR;

        // Pega a lista já cadastrada, se não houver vira um array vazio
        var ARRAY_RECORDES = JSON.parse(localStorage.getItem('array-recordes') || '[]');
        // Adiciona pessoa ao cadastro
        ARRAY_RECORDES.push(
            PEGARPONTOSPARASTORAGE,

        );

        // Salva a lista alterada
        localStorage.setItem("array-recordes", JSON.stringify(ARRAY_RECORDES));

        console.log('Salva com sucesso.');

        MAIORPONTUACAO = ARRAY_RECORDES.sort(function(a, b) {
            return b - a;
        });

        console.log(MAIORPONTUACAO[0]);
        console.log(MAIORPONTUACAO[1]);
        console.log(MAIORPONTUACAO[2]);
        botaoreiniciar();

        clearInterval(pontadas);
        PARARLOCALSTORAGE = true;
    }

}

function recordes() {

    RECORDE.style.display = "block"

    if (MAIORPONTUACAO[1] == undefined && MAIORPONTUACAO[2] == undefined) {

        MAIORPONTUACAO[1] = "";
        MAIORPONTUACAO[2] = "";

    }
    if (MAIORPONTUACAO[1] !== undefined && MAIORPONTUACAO[2] == undefined) {
        MAIORPONTUACAO[2] = "";

    }

    RECORDE.innerHTML = "BEST: " + MAIORPONTUACAO[0] + "             " + MAIORPONTUACAO[1] + "             " + MAIORPONTUACAO[2];

}

function botaoreiniciar() {

    GAMEOVER.play();
    div1.style.display = "none"

    div2.style.display = "none"

    INICIO = false;

    REINICIO.style.display = "flex";

}

function reiniciar() {

    JAFOICLICADO = false;

    div1.style.top = 50 + "%";
    div1.style.display = "block"
    REINICIO.style.display = "none";

    div2.style.display = "block"

    CONTAR = 0;
    VELOCIDADE = 0;

    clearInterval(M)
    clearInterval(TIMER)

    div2.style.left = +100 + "%";

    iniciar();

}

///Mostrar pontuação quando der game over

function mostrarPontos() {

    DIVPONTOS.innerHTML = "Sua pontuação foi " + CONTAR

}

// começa com false pra poder ser clicado pela primeira vez
var JAFOICLICADO = false;

function clicarBotao() {
    if (!JAFOICLICADO) {

        if (CONTAR > 100) {

            console.log("Oii");

            if (CONTAR > 120) {

                console.log("bahh")
            }
        }

        move(acima);

        SOMPULO.play();
        console.log("primeira vez");
        // substitui aqui dentro pelo seu código
        JAFOICLICADO = true;
    }

}

//Ao carregar a página estas linhas são executadas. 
let CONTADOR = 0;
let cont = 0;
var M = "" //Funções que são chamadas a cada 15 e 5 milisegundos
let n = setInterval("colisao()", 5);
let contadorpulo = 0;

var SOMPULO = new Audio();
SOMPULO.src = 'pulo.wav';

var MUSICADEFUNDO = new Audio();
MUSICADEFUNDO.src = 'musicafundo.wav';

var GAMEOVER = new Audio();
GAMEOVER.src = 'gameover.wav';

