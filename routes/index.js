var moviesJson = require('../movies.json')

//home
var home = (req, res) => {
  res.render('home', {title: 'my star wars movies', movies: moviesJson.movies})
}

//single movie
var movieSingle = (req, res) => {
  
  var episodeNum = req.params.id
  var movies = moviesJson.movies
  
  if(episodeNum >= 1 && episodeNum <= 6 ){
    var movie = movies[episodeNum-1]
    var title = movie.title;
    var main_character = movie.main_characters; 
    
    res.render('movie_single', {
      title: title, 
      movies: moviesJson.movies, 
      movie: movie,
      main_characters: main_character
    })
  }
  else{
    res.render('notFound', {
      movies: moviesJson.movies,
      title: 'This is not the page you are looking for...'
    })
  }

}

//not found
var notFound = (req, res) => {
  res.render('notFound', {
    movies: moviesJson.movies,
    title: 'This is not the page you are looking for...'
  })
}

module.exports = {
  home: home,
  movieSingle: movieSingle,
  notFound: notFound
}