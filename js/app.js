
const printData = movie => {

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
