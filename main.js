let musicaTocando = null;

function tocaMusica (idElementoMusica) {
    const proximaMusica = document.querySelector(idElementoMusica); 

    if (musicaTocando === null) {
        proximaMusica.play();
        musicaTocando=proximaMusica;
        
    }else if(musicaTocando != null && musicaTocando != proximaMusica){
        musicaTocando.pause();
        proximaMusica.play();
        musicaTocando = proximaMusica;
    } else {
             console.log('Elemento não encontrado ou seletor inválido');
    }
}

function paraMusica () {
    if (musicaTocando!= null) {
        musicaTocando.pause();
        musicaTocando=null
    }
}

const listaRecentes = document.querySelectorAll('.botao--play');
const listaPause = document.querySelectorAll('.botao--pause');

for (let contador=0; contador < listaRecentes.length; contador++) {

    const playMusica = listaRecentes[contador];
    const musicaAtual = playMusica.classList[2];
    const idAudio = `#som_${musicaAtual}`;

    playMusica.onclick = function () {
        tocaMusica(idAudio);
        listaPause[contador].style.display = 'block';
        listaRecentes[contador].style.display = 'none';
    };
}

for (let contador=0; contador <listaPause.length; contador++){
    
    const pausaMusica = listaPause[contador];

    pausaMusica.onclick = function () {
        paraMusica();
        listaRecentes[contador].style.display = 'block';
        listaPause[contador].style.display = 'none';
    };
}