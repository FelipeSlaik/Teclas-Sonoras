function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    // != "Diferente de " /////  && 'and ou e'
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou Seletor inválido');
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//Enquanto = while    for = para
for (contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador]
    const instrumento = tecla.classList[1];


    //template string
    const idAudio = `#som_${instrumento}`;
    //------------------------------------
    tecla.onclick = function () {
        tocaSom(idAudio)
    };

    //Adicionando CLass Ativa nas teclas
    tecla.onkeydown = function (evento) {

        // if é igual a 'Se'  e || seria 'ou'
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }


    //Removendo Class Ativa das teclas
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}