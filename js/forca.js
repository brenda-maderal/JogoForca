let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002 = {
        nome: "CAOTINHO",
        categoria: "LUGARES",
    },
    palavra003 = {
        nome: "EGITO",
        categoria: "LUGARES",
    },
    palavra004 = {
        nome: "GYGABON",
        categoria: "LUGARES",
    },
    palavra005 = {
        nome: "HABIBS",
        categoria: "LUGARES",
    },
    palavra006 = {
        nome: "QUATA",
        categoria: "LUGARES",
    },
    palavra007 = {
        nome: "MEXICO",
        categoria: "LUGARES",
    },
    palavra008 = {
        nome: "CANCUN",
        categoria: "LUGARES",
    },
    palavra009 = {
        nome: "CHILE",
        categoria: "LUGARES",
    },
    palavra010 = {
        nome: "PAQUISTAO",
        categoria: "LUGARES",
    },
    palavra011 = {
        nome: "MISTY",
        categoria: "ANIMAIS",
    },
    palavra012 = {
        nome: "LAIRA",
        categoria: "ANIMAIS",
    },
    palavra013 = {
        nome: "BEBEL",
        categoria: "ANIMAIS",
    },
    palavra014 = {
        nome: "PENELOPE",
        categoria: "ANIMAIS",
    },
    palavra015 = {
        nome: "LADY",
        categoria: "ANIMAIS",
    },
    palavra016 = {
        nome: "GOKU",
        categoria: "ANIMAIS",
    },
    palavra017 = {
        nome: "BUCKY",
        categoria: "ANIMAIS",
    },
    palavra018 = {
        nome: "MALU",
        categoria: "ANIMAIS",
    },
    palavra019 = {
        nome: "MOLY",
        categoria: "ANIMAIS",
    },
    palavra020 = {
        nome: "VITOR",
        categoria: "ANIMAIS",
    },
    palavra021 = {
        nome: "GALINHADA",
        categoria: "ALIMENTOS",
    },
    palavra022 = {
        nome: "NHOQUE",
        categoria: "ALIMENTOS",
    },
    palavra023 = {
        nome: "STROGONOFF",
        categoria: "ALIMENTOS",
    },
    palavra024 = {
        nome: "BOLACHA",
        categoria: "ALIMENTOS",
    },
    palavra025 = {
        nome: "BISCOITO",
        categoria: "ALIMENTOS",
    },
    palavra026 = {
        nome: "FAROFA",
        categoria: "ALIMENTOS",
    },
    palavra027 = {
        nome: "PIMENTA",
        categoria: "ALIMENTOS",
    },
    palavra028 = {
        nome: "REQUEIJAO",
        categoria: "ALIMENTOS",
    },
    palavra029 = {
        nome: "MAIONESE",
        categoria: "ALIMENTOS",
    },
    palavra030 = {
        nome: "NUGGETS",
        categoria: "ALIMENTOS",
    },
    palavra031 = {
        nome: "FAQUEIRO",
        categoria: "OBJETOS",
    },
    palavra032 = {
        nome: "CARIMBO",
        categoria: "OBJETOS",
    },
    palavra033 = {
        nome: "ABAJUR",
        categoria: "OBJETOS",
    },
    palavra034 = {
        nome: "MAMADEIRA",
        categoria: "OBJETOS",
    },
    palavra035 = {
        nome: "BABYLISS",
        categoria: "OBJETOS",
    },
    palavra036 = {
        nome: "CORTINA",
        categoria: "OBJETOS",
    },
    palavra037 = {
        nome: "ESTANTE",
        categoria: "OBJETOS",
    },
    palavra038 = {
        nome: "UMIDIFICADOR",
        categoria: "OBJETOS",
    },
    palavra039 = {
        nome: "MAUSE",
        categoria: "OBJETOS",
    },
    palavra040 = {
        nome: "HEADSET",
        categoria: "OBJETOS",
    },
    palavra041 = {
        nome: "MINECRAFT",
        categoria: "JOGOS",
    },
    palavra042 = {
        nome: "FREEFIRE",
        categoria: "JOGOS",
    },
    palavra043 = {
        nome: "MONOPOLY",
        categoria: "JOGOS",
    },
    palavra044 = {
        nome: "QUEIMADA",
        categoria: "JOGOS",
    },
    palavra045 = {
        nome: "AMONGUS",
        categoria: "JOGOS",
    },
    palavra046 = {
        nome: "CRASH",
        categoria: "JOGOS",
    },
    palavra047 = {
        nome: "SONIC",
        categoria: "JOGOS",
    },
    palavra048 = {
        nome: "THESIMS",
        categoria: "JOGOS",
    },
    palavra049 = {
        nome: "ROBLOX",
        categoria: "JOGOS",
    },
    palavra050 = {
        nome: "XADREZ",
        categoria: "JOGOS",
    },
    palavra051 = {
        nome: "JESSIE",
        categoria: "ANIMAIS",
    },
];

criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}

montarPalavraNaTela();
function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = " &nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
   document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra)
        comparalistas(letra);
        montarPalavraNaTela();
    }                                                                                            
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0)
        {
            abreModal("RUIM!", "Você foi burro e perdeu... Mas a resposta era <br>" + palavraSecretaSorteada);
        }
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++ )
        {
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++ ){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você fez o mínimo e ganhou!");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('../img/forca2.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('../img/forca3.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('../img/forca4.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('../img/forca5.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('../img/forca6.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('../img/forca7.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('../img/forca1.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
    location.reload();
});

