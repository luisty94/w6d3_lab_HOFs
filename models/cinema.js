const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.viewFilmTitles = function () {
  return this.films.map((film) => {
    return film.title
  });

};

Cinema.prototype.findFilmByTitle = function (title) {
  const result = this.films.find((film) => {
    return film.title === title
   });
   return result
};

Cinema.prototype.findFilmByGenre = function (genre) {
  const result = this.films.find((film) => {
    return film.genre === genre
   });
   return result
};



module.exports = Cinema;
