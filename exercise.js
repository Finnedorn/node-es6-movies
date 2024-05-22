const netflixArchive = [
    {
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi",
      rating: 8.8,
      type: "movie"
    },
    {
      title: "Breaking Bad",
      year: 2008,
      genre: "Crime, Drama, Thriller",
      rating: 9.5,
      type: "tv",
      seasons: 5
    },
    {
      title: "The Dark Knight",
      year: 2008,
      genre: "Action, Crime, Drama",
      rating: 9.0,
      type: "movie"
    },
    {
      title: "Stranger Things",
      year: 2016,
      genre: "Drama, Fantasy, Horror",
      rating: 8.7,
      type: "tv",
      seasons: 4
    },
    {
      title: "The Matrix",
      year: 1999,
      genre: "Action, Sci-Fi",
      rating: 8.7,
      type: "movie"
    },
    {
      title: "Game of Thrones",
      year: 2011,
      genre: "Action, Adventure, Drama",
      rating: 9.2,
      type: "tv",
      seasons: 8
    }
];

class Movie {
    constructor(title, year, genre, rating, type, seasons = null) {
      this.title = title;
      this.year = year;
      this.genre = genre;
      this.rating = rating;
      this.type = type;
      this.seasons = seasons;
    }

    toStringMovies() {
        return `${this.title} è un film di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}.`;
    }
}

class TvSerie extends Movie {
    constructor(title, year, genre, rating, type, seasons) {
      super(title, year, genre, rating, type);
      this.seasons = seasons;
    }

    toStringSeries() {
        return `${this.title} è una serie tv di genere ${this.genre}. E' stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}.`;
    }
    
}

netflixArchive.map((product) => {
    if(product.type === "movie") {
        product = new Movie(product.title, product.year, product.genre, product.rating, product.type);
        console.log(product.toStringMovies());
    } else {
        product = new TvSerie(product.title, product.year, product.genre, product.rating, product.type, product.seasons);
        console.log(product.toStringSeries());
    }
})
