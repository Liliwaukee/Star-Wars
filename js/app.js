
$('.collapsible').collapsible();
$('.modal').modal();

const containerMoviesData = document.querySelector("#movies-data");
const containerCharactersData = document.querySelector("#movie-characters");
const collapsible = document.querySelector("#collapsible");

const printModal = (name) => {
  $('#name-char').text(name);
}

const printData = movies => {
  movies.forEach(movie => {

    const urlCharacters = movie.characters;
    let character = "";

    urlCharacters.forEach(url => {
      character +=
      `<a id="ancla" class="modal-trigger link-character" href="#modal1"
      data-info="hola">${url}</a>`

      fetch(url)
      .then(response => response.json())
      .then(data => {
        const nameCharacter = data.name;
        printModal(nameCharacter)
      })
    })


    const features = `
    <h4 id="title" class="movie-title">${movie.title}</h4>
    <p class="movie-episode">${movie.episode_id}</p>
    <p>${character}</p>
    `;

    const containerInfo = document.createElement("div");
    containerInfo.classList.add("col");
    containerInfo.classList.add("m6");
    containerInfo.innerHTML = features;
    containerMoviesData.appendChild(containerInfo);

  } )
}

  const url = 'https://swapi.co/api/films/';

  fetch( url )
      .then( response => response.json() )
      .then(
        data => {
          const movies = data.results; //resultado de
          printData(movies)
        }
      )
      .catch( e => console.log( 'Something went wrong' ) );


/*
const handleResponse = (data) =>{
  console.log(data);
}

  $.ajax({

      url:"https://swapi.co/api/films/"
  }).done(handleResponse);
*/
