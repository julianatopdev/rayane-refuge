async function carregarMusicas(){


    const resposta =
    await fetch("../data/musicas.json");



    const musicas =
    await resposta.json();



    const lista =
    document.getElementById(
        "listaMusicas"
    );



    musicas.forEach(
        (musica,index)=>{


            const card =
            document.createElement(
                "article"
            );


            card.classList.add(
                "song-card"
            );



            card.innerHTML = `


            <div class="album">

            ${index === 0 ? "🎵" : "🎵"}

            </div>



            <div class="song-info">


            <h3>
            ${musica.titulo}
            </h3>



            <span>
            ${musica.artista}
            </span>



            <p>
            ${musica.mensagem}
            </p>



            <a 
            href="${musica.spotify}"
            target="_blank"
            class="listen">

            🎧 Ouvir no Spotify

            </a>


            </div>


            `;



            lista.appendChild(card);



        }
    );



}



carregarMusicas();