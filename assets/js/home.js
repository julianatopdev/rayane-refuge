/* ===========================
   DATAS IMPORTANTES
=========================== */

const datas = {

    conhecemos: new Date("2026-03-25T00:00:00"),

    encontro: new Date("2026-06-05T00:00:00"),

    namoro: new Date("2026-06-16T00:00:00")

};

/* ===========================
   CONTADORES
=========================== */

function atualizarContador(id, data){

    const container = document.getElementById(id);

    // Cria a estrutura apenas uma vez
    if(container.children.length === 0){

        container.innerHTML = `

        <div>
            <span class="dias">0</span>
            <small>Dias</small>
        </div>

        <div>
            <span class="horas">0</span>
            <small>Horas</small>
        </div>

        <div>
            <span class="minutos">0</span>
            <small>Minutos</small>
        </div>

        <div>
            <span class="segundos">0</span>
            <small>Segundos</small>
        </div>

        `;

    }

    const agora = new Date();

    let diff = agora - data;

    const dias = Math.floor(diff / 86400000);

    diff %= 86400000;

    const horas = Math.floor(diff / 3600000);

    diff %= 3600000;

    const minutos = Math.floor(diff / 60000);

    diff %= 60000;

    const segundos = Math.floor(diff / 1000);

    container.querySelector(".dias").textContent = dias;
    container.querySelector(".horas").textContent = horas;
    container.querySelector(".minutos").textContent = minutos;
    container.querySelector(".segundos").textContent = segundos;

}

function atualizarTudo(){

    atualizarContador("counterConhecemos",datas.conhecemos);

    atualizarContador("counterEncontro",datas.encontro);

    atualizarContador("counterNamoro",datas.namoro);

}

setInterval(atualizarTudo,1000);

atualizarTudo();

/* ===========================
   MENSAGEM DO DIA
=========================== */

const mensagens=[

"Espero que hoje você sorria tanto quanto me faz sorrir.",

"Mesmo longe, você continua sendo meu lugar favorito.",

"Se hoje foi difícil, lembra que amanhã eu continuo aqui.",

"Obrigada por existir na minha vida.",

"Você é meu pensamento favorito todos os dias.",

"Não importa a distância. Meu coração sempre encontra você."

];

const mensagemElemento=document.getElementById("mensagemDia");

if(mensagemElemento){

    const hoje=new Date().getDate();

    mensagemElemento.textContent=mensagens[
        hoje % mensagens.length
    ];

}

/* ===========================
   MEMÓRIA DO DIA
=========================== */

async function carregarMemoria(){

    try{

        const resposta=

        await fetch("data/memorias.json");

        const memorias=

        await resposta.json();

        const hoje=

        new Date().getDate();

        const memoria=

        memorias[hoje % memorias.length];

        if(document.getElementById("memoryPhoto")){

            document.getElementById("memoryPhoto").src=

            memoria.foto;

        }

        if(document.getElementById("memoryText")){

            document.getElementById("memoryText").textContent=

            memoria.texto;

        }

    }

    catch(error){

        console.log(error);

    }

}

carregarMemoria();

/* ===========================
   MÚSICA
=========================== */

async function carregarMusica(){

    try{

        const resposta=

        await fetch("data/musicas.json");

        const musicas=

        await resposta.json();

        const musica=

        musicas[musicas.length-1];

        document.getElementById("songTitle").textContent=

        musica.titulo;

        document.getElementById("songArtist").textContent=

        musica.artista;

        document.getElementById("songTrecho").textContent=

        musica.trecho;

        document.getElementById("songMensagem").textContent=

        musica.mensagem;

        document.getElementById("spotifyLink").href=

        musica.spotify;

    }

    catch(error){

        console.log(error);

    }

}

carregarMusica();

/* ===========================
   ÚLTIMO POST
=========================== */

async function carregarUltimoPost(){

    try{

        const resposta=

        await fetch("data/posts.json");

        const posts=

        await resposta.json();

        const ultimo=

        posts[posts.length-1];

        document.getElementById("lastPost").innerHTML=

        `

        <div class="glass post-preview">

            <img src="${ultimo.imagem}">

            <div class="post-info">

                <small>${ultimo.data}</small>

                <h2>${ultimo.titulo}</h2>

                <p>${ultimo.texto}</p>

            </div>

        </div>

        `;

    }

    catch(error){

        console.log(error);

    }

}

carregarUltimoPost();

/* ===========================
   FADE AO ROLAR
=========================== */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});