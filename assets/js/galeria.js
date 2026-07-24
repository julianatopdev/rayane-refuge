const gallery = document.getElementById("gallery");

const modal = document.getElementById("galleryModal");

const imagem = document.getElementById("galleryImage");
const titulo = document.getElementById("galleryTitle");
const data = document.getElementById("galleryDate");
const descricao = document.getElementById("galleryDescription");

const fechar = document.getElementById("closeGallery");
const overlay = document.querySelector(".gallery-overlay");

const anterior = document.getElementById("prevPhoto");
const proxima = document.getElementById("nextPhoto");

let fotos = [];
let indiceAtual = 0;

async function carregarGaleria(){

    try{

        const resposta = await fetch("../data/galeria.json");

        fotos = await resposta.json();

        fotos.forEach((foto,index)=>{

            const card = document.createElement("article");

            card.className = "photo-card";

            card.innerHTML = `

                <img
                    src="${foto.imagem}"
                    alt="${foto.titulo}">

                <div>

                    <h3>${foto.titulo}</h3>

                    <p>${foto.descricao}</p>

                </div>

            `;

            card.addEventListener("click",()=>{

                abrirFoto(index);

            });

            gallery.appendChild(card);

        });

    }catch(erro){

        console.error(erro);

        gallery.innerHTML = `
            <p style="text-align:center;">
                Não foi possível carregar a galeria.
            </p>
        `;

    }

}

function abrirFoto(index){

    indiceAtual = index;

    atualizarModal();

    modal.classList.add("active");

}

function atualizarModal(){

    const foto = fotos[indiceAtual];

    imagem.src = foto.imagem;

    titulo.textContent = foto.titulo;

    descricao.textContent = foto.descricao;

    data.textContent = formatarData(foto.data);

}

function formatarData(dataTexto){

    const [ano, mes, dia] = dataTexto.split("-");

    const dataObj = new Date(ano, mes - 1, dia);

    return dataObj.toLocaleDateString("pt-BR", {

        day: "2-digit",
        month: "long",
        year: "numeric"

    });

}

fechar.onclick = ()=>{

    modal.classList.remove("active");

};

overlay.onclick = ()=>{

    modal.classList.remove("active");

};

proxima.onclick = ()=>{

    indiceAtual++;

    if(indiceAtual>=fotos.length){

        indiceAtual=0;

    }

    atualizarModal();

};

anterior.onclick = ()=>{

    indiceAtual--;

    if(indiceAtual<0){

        indiceAtual=fotos.length-1;

    }

    atualizarModal();

};

document.addEventListener("keydown",(e)=>{

    if(!modal.classList.contains("active")) return;

    if(e.key==="ArrowRight") proxima.click();

    if(e.key==="ArrowLeft") anterior.click();

    if(e.key==="Escape") fechar.click();

});

carregarGaleria();