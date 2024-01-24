document.addEventListener("DOMContentLoaded", function() {
    const myList = document.getElementById("my-list");
    const profileButton = document.getElementById("profile-button");
    const movieDetails = document.getElementById("movie-details");
    const movieImageDetails = document.getElementById("image-details");
    const movieDetailsContent = document.querySelector(".movie-details-content");
    const movieTitle = document.getElementById("movie-title");
    const movieDescription = document.getElementById("movie-description");
    const genreFilter = document.getElementById("genre-filter");
    const closeDetailsButton = document.getElementById("close-details");

     const filmeFav = [
     ]

    // Estrutura JSON com os dados dos filmes
    const listaDeFilmes = [
        {
            titulo: "A Pequena Sereia",
            descricao: "Uma jovem sereia faz um acordo com uma bruxa do mar para trocar sua bela voz por pernas humanas para que possa descobrir o mundo acima da água e impressionar um príncipe.",
            genero: "Infantil",
            imagem_url: "filme9.jpg",
            naMinhaLista: true
        },
        {
            titulo: "Jogos Vorazes",
            descricao: "Na região antigamente conhecida como América do Norte, a Capital de Panem controla 12 distritos e os força a escolher um garoto e uma garota, conhecidos como tributos, para competir em um evento anual televisionado. Todos os cidadãos assistem aos temidos jogos, no qual os jovens lutam até a morte, de modo que apenas um saia vitorioso. A jovem Katniss Everdeen, do Distrito 12, confia na habilidade de caça e na destreza com o arco, além dos instintos aguçados, nesta competição mortal.",
            genero: "Drama",
            imagem_url: "filme16.jpg",
            naMinhaLista: true
        },
        {
            titulo: "A Pequena Sereia 2",
            descricao: "Uma jovem sereia faz um acordo com uma bruxa do mar para trocar sua bela voz por pernas humanas para que possa descobrir o mundo acima da água e impressionar um príncipe.",
            genero: "Infantil",
            imagem_url: "filme4.jpg",
            naMinhaLista: true
        },
        {
            titulo: "Pânico",
            descricao: "Um grupo de jovens enfrenta um assassino mascarado que testa seus conhecimentos sobre filmes de terror. A pequena cidade de Woodsboro nunca mais será a mesma.",
            genero: "Terror",
            imagem_url: "filme6.jpg",
            naMinhaLista: true
        },
        {
            titulo: "Simplesmente Acontece",
            descricao: "Alex e Rosie são amigos inseparáveis que cresceram juntos em Londres, compartilhando entre si suas melhores experiências. Tudo muda quando Alex ganha uma bolsa de estudos e passa a morar nos EUA. Separados, seus caminhos agora são outros. Mas nos tempos de hoje é impossível não se conectar. E, em se tratando de amor, o difícil é fazer as escolhas certas.",
            genero: "Romance",
            imagem_url: "filme10.jpg",
            naMinhaLista: true
        },
        {
            titulo: "Bird Box",
            descricao: "Entidades misteriosas invadem a Terra com sua terrível presença. Aqueles que as veem, se matam instantaneamente. O mundo entra em colapso, mas uma mãe luta para encontrar um lugar seguro para viver com seus filhos.",
            genero: "Suspense",
            imagem_url: "filme12.jpg",
            naMinhaLista: true
        }
        ,
        {
            titulo: "Querido John",
            descricao: "O soldado John Tyree conhece a universitária idealista Savannah Curtis e uma forte ligação nasce entre eles. Durante sete anos de um tumultuado romance, o casal se encontra apenas esporadicamente e mantém contato por meio de cartas de amor. No entanto, a correspondência entre o casal desencadeia consequências imprevisíveis.",
            genero: "Romance",
            imagem_url: "filme18.jpg",
            naMinhaLista: true
        }
        ,
        {
            titulo: "Minha Mãe é uma Peça 3",
            descricao: "Dona Hermínia precisa se redescobrir e se reinventar porque seus filhos estão formando novas famílias. Marcelina está grávida e Juliano vai casar. Dona Hermínia está mais ansiosa do que nunca. Para completar as confusões, Carlos Alberto, seu ex-marido, que esteve sempre por perto, agora resolve se mudar para o apartamento ao lado..",
            genero: "Comédia",
            imagem_url: "filme19.jpg",
            naMinhaLista: true
        }
    ];
    // repetição para os filmes
  for(i=0;i<listaDeFilmes.length;i++){
    if(listaDeFilmes[i].naMinhaLista==true){
        filmeFav.push(listaDeFilmes[i])
    }
  } 

    // Renderiza os filmes na página
    renderMyList();

    // Exibe detalhes do filme quando clicado
    myList.addEventListener("click", (event) => {
        const clickedElement = event.target;
    
        if (clickedElement.classList.contains("movie-card")) {
            // Se o clique ocorreu em um elemento com a classe "movie-card"
            const index = clickedElement.getAttribute("data-index");
            showMovieDetails(index);
        } else if (clickedElement.tagName === "IMG" && clickedElement.closest(".movie-card")) {
            // Se o clique ocorreu em uma imagem dentro de um elemento com a classe "movie-card"
            const movieCard = clickedElement.closest(".movie-card");
            const index = movieCard.getAttribute("data-index");
            showMovieDetails(index);
        }
    });
    
    // Fecha a janela de detalhes do filme
    closeDetailsButton.addEventListener("click", () => {
    movieDetails.style.display = "none";
        
    });

    // Mostra a página de perfil do usuário quando o botão "Perfil" é clicado
    profileButton.addEventListener('click', () => {
        // Redirecionar para a página de perfil do usuário (substituir a URL apropriada).
       // window.location.href = '!! COLOCAR O URL AQUI !!';
    });

    // Filtra os filmes por gênero
    genreFilter.addEventListener('change', () => {
        const selectedGenre = genreFilter.value;
        if (selectedGenre === 'all') {
            renderMyList();
        } else {
            const filteredMovies = listaDeFilmes.filter(filme => filme.genero === selectedGenre);
            renderMyList(filteredMovies);
        }
    });

    function renderMyList(filmes) {
        myList.innerHTML = "";
        (filmes || filmeFav).forEach((filme, index) => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");
            movieCard.setAttribute("data-index", index);
            movieCard.innerHTML = `
                <img src="${filme.imagem_url}" alt="${filme.titulo}">
                <h3>${filme.titulo}</h3>
                <p class="remove-button">${filme.naMinhaLista ? 'Retirar da Minha Lista' : 'Adicionar à Minha Lista'}</p>
            `;
            myList.appendChild(movieCard);

            //remove o filme da Minha Lista
            movieCard.querySelector('.remove-button').addEventListener('click', () => {
                filmeFav[index].naMinhaLista = !filmeFav[index].naMinhaLista;
                filmeFav.splice(index,1);
                renderMyList();
            });
        });
    }

    function showMovieDetails(index) {
        movieImageDetails.src = filmeFav[index].imagem_url;
        movieTitle.textContent = filmeFav[index].titulo;
        movieDescription.textContent = filmeFav[index].descricao;
        movieDetails.style.display = 'flex';
    }
});
