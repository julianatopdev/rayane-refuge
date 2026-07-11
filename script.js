const datas = {

conhecemos:"2026-03-25",

primeiroEncontro:"2026-06-05",

pedidoNamoro:"2026-06-16"

};

function calcularDias(data){

const inicio = new Date(data);

const hoje = new Date();

return Math.floor(
(hoje - inicio) /
(1000*60*60*24)
);

}

document.getElementById("diasConhecemos")
.textContent =
calcularDias(datas.conhecemos);

document.getElementById("diasEncontro")
.textContent =
calcularDias(datas.primeiroEncontro);

document.getElementById("diasNamoro")
.textContent =
calcularDias(datas.pedidoNamoro);

async function carregarMusica() {

    const response = await fetch("./data/musicas.json");

    const musicas = await response.json();

    // pega a última música cadastrada
    const musica = musicas[musicas.length - 1];

    document.getElementById("songTitle").textContent =
        musica.titulo;

    document.getElementById("songArtist").textContent =
        musica.artista;

    document.getElementById("songTrecho").textContent =
        musica.trecho;

    document.getElementById("songMensagem").textContent =
        musica.mensagem;

    document.getElementById("spotifyLink").href =
        musica.spotify;

}

async function carregarPosts(){

const response =
await fetch("./data/posts.json");

const posts =
await response.json();

const container =
document.getElementById("postsContainer");

container.innerHTML = "";

posts.reverse().forEach(post=>{

container.innerHTML += `

<div class="post">

${
post.imagem
?
`<img src="${post.imagem}">`
:
""
}

<div class="post-content">

<div class="post-author">
${post.autor}
</div>

<div class="post-date">
${post.data}
</div>

<div class="post-title">
${post.titulo}
</div>

<p>
${post.texto}
</p>

</div>

</div>

`;

});

}

function mensagemDoDia(){

const hora =
new Date().getHours();

let mensagem = "";

if(hora < 12){

mensagem =
"Bom dia, minha linda! Espero que hoje você encontre motivos para sorrir.";

}else if(hora < 18){

mensagem =
"Boa tarde, meu amor! Pensei em você enquanto organizava nossas memórias.";

}else{

mensagem =
"Boa noite, minha vida! Espero que seu dia tenha sido leve e gentil com você.";

}

document
.getElementById("mensagemDia")
.textContent = mensagem;

}

mensagemDoDia();

async function carregarMemoria(){

const response =
await fetch("./data/memorias.json");

const memorias =
await response.json();

const memoria =
memorias[
Math.floor(
Math.random() * memorias.length
)
];

document
.getElementById("memoriaFoto")
.src = memoria.foto;

document
.getElementById("memoriaTexto")
.textContent =
memoria.texto;

}

async function carregarUltimoPost(){

const response =
await fetch("./data/posts.json");

const posts =
await response.json();

const ultimo =
posts[posts.length - 1];

document
.getElementById("ultimoPost")
.innerHTML = `

<h3>${ultimo.titulo}</h3>

<p>${ultimo.texto}</p>

`;

}

carregarUltimoPost();

carregarMemoria();

mensagemDoDia();

carregarMusica();

carregarPosts();