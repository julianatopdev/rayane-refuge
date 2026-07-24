// =======================================
// RAYANE REFUGE ❤️
// JAVASCRIPT PRINCIPAL
// =======================================





// =======================================
// CONTADORES DE TEMPO REAL
// =======================================



function calcularTempo(dataInicial){


    const inicio = new Date(dataInicial);

    const agora = new Date();


    const diferenca = agora - inicio;



    const segundosTotais = Math.floor(
        diferenca / 1000
    );



    const dias = Math.floor(
        segundosTotais / 86400
    );



    const horas = Math.floor(
        (segundosTotais % 86400) / 3600
    );



    const minutos = Math.floor(
        (segundosTotais % 3600) / 60
    );



    const segundos = 
        segundosTotais % 60;



    return {

        dias,
        horas,
        minutos,
        segundos

    };


}







function colocarTempo(prefixo, tempo){



    const dias =
    document.getElementById(
        prefixo + "Dias"
    );



    const horas =
    document.getElementById(
        prefixo + "Horas"
    );



    const minutos =
    document.getElementById(
        prefixo + "Minutos"
    );



    const segundos =
    document.getElementById(
        prefixo + "Segundos"
    );




    if(dias){

        dias.innerHTML =
        tempo.dias;

    }



    if(horas){

        horas.innerHTML =
        tempo.horas
        .toString()
        .padStart(2,"0");

    }




    if(minutos){

        minutos.innerHTML =
        tempo.minutos
        .toString()
        .padStart(2,"0");

    }




    if(segundos){

        segundos.innerHTML =
        tempo.segundos
        .toString()
        .padStart(2,"0");

    }


}







function atualizarContadores(){



    const conhecemos =
    calcularTempo(
        "2026-03-25T00:00:00"
    );



    const encontro =
    calcularTempo(
        "2026-06-05T00:00:00"
    );



    const namoro =
    calcularTempo(
        "2026-06-16T00:00:00"
    );




    colocarTempo(
        "conhecemos",
        conhecemos
    );



    colocarTempo(
        "encontro",
        encontro
    );



    colocarTempo(
        "namoro",
        namoro
    );


}





setInterval(
    atualizarContadores,
    1000
);



atualizarContadores();









// =======================================
// ANIMAÇÃO DE ENTRADA
// =======================================



document.addEventListener(
"DOMContentLoaded",
()=>{


    const elementos =
    document.querySelectorAll(
        ".hero, .intro-card, .counter-card, .feature-card"
    );



    elementos.forEach(
        (elemento,index)=>{


            elemento.style.opacity = "0";

            elemento.style.transform =
            "translateY(30px)";



            setTimeout(()=>{


                elemento.style.transition =
                "all .8s ease";



                elemento.style.opacity =
                "1";



                elemento.style.transform =
                "translateY(0)";



            },150 * index);



        }
    );


});









// =======================================
// CORAÇÕES FLUTUANTES ❤️
// =======================================



function criarCoracao(){



    const coracao =
    document.createElement("div");



    coracao.innerHTML =
    "❤️";



    coracao.style.position =
    "fixed";



    coracao.style.bottom =
    "-20px";



    coracao.style.left =
    Math.random()*100+"vw";



    coracao.style.fontSize =
    (Math.random()*15+15)+"px";



    coracao.style.opacity =
    Math.random();



    coracao.style.pointerEvents =
    "none";



    coracao.style.zIndex =
    "999";



    coracao.style.animation =
    "subirCoracao 7s linear";



    document.body.appendChild(
        coracao
    );



    setTimeout(()=>{


        coracao.remove();


    },7000);



}




setInterval(
    criarCoracao,
    3000
);







// adiciona animação dos corações

const estiloCoracao =
document.createElement("style");


estiloCoracao.innerHTML = `


@keyframes subirCoracao {


0% {

transform:
translateY(0)
rotate(0deg);

}



100% {

transform:
translateY(-120vh)
rotate(360deg);

}


}


`;



document.head.appendChild(
    estiloCoracao
);

// =======================================
// ABERTURA DO SITE ✨
// =======================================


const botaoEntrada =
document.getElementById(
    "enterSite"
);



const abertura =
document.querySelector(
    ".opening-screen"
);



if(botaoEntrada && abertura){


    botaoEntrada.addEventListener(
        "click",
        ()=>{


            abertura.classList.add(
                "hide"
            );


            localStorage.setItem(
                "rayaneRefugeVisitou",
                "true"
            );


        }
    );


}

