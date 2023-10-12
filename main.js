function tocaMusica (idElementoMusica) {
    document.querySelector(idElementoMusica).play();
}

const listaRecentes = document.querySelectorAll('.cartao__botao');


for (let contador=0; contador < listaRecentes.length; contador++) {

    const musica = listaRecentes[contador];
    const musicaAtual = musica.classList[1];
    const idAudio = `#som_${musicaAtual}`;

    musica.onclick = function () {
        tocaMusica(idAudio);
    };
}

