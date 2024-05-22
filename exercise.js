// Definire un array di oggetti; ogni oggetto rappresenta un film o serie tv, 
// che è caratterizzato da: title, year, genre, rating, type (movie o tv), seasons (solo per serie tv).
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
      genre: "Crime",
      rating: 9.5,
      type: "tv",
      seasons: 5
    },
    {
      title: "The Dark Knight",
      year: 2008,
      genre: "Action",
      rating: 9.0,
      type: "movie"
    },
    {
      title: "Stranger Things",
      year: 2016,
      genre: "Fantasy",
      rating: 8.7,
      type: "tv",
      seasons: 4
    },
    {
      title: "The Matrix",
      year: 1999,
      genre: "Action",
      rating: 8.7,
      type: "movie"
    },
    {
      title: "Game of Thrones",
      year: 2011,
      genre: "Adventure",
      rating: 9.2,
      type: "tv",
      seasons: 8
    },
    {
        title: "The Irishman",
        year: 2019,
        genre: "Crime",
        rating: 7.8,
        type: "movie"
    },
    {
        title: "Narcos",
        year: 2015,
        genre: "Crime",
        rating: 8.8,
        type: "tv",
        seasons: 3
    },
    {
        title: "Money Heist",
        year: 2017,
        genre: "Action",
        rating: 8.3,
        type: "tv",
        seasons: 5
    },
    {
        title: "The Crown",
        year: 2016,
        genre: "History",
        rating: 8.6,
        type: "tv",
        seasons: 5
    },
    {
        title: "BoJack Horseman",
        year: 2014,
        genre: "Animation",
        rating: 8.7,
        type: "tv",
        seasons: 6
    },
    {
        title: "The Queen's Gambit",
        year: 2020,
        genre: "Drama",
        rating: 8.6,
        type: "tv",
        seasons: 1
    },
    {
        title: "The Godfather",
        year: 1972,
        genre: "Crime",
        rating: 9.2,
        type: "movie"
    },
    {
        title: "Forrest Gump",
        year: 1994,
        genre: "Drama",
        rating: 8.8,
        type: "movie"
    },
    {
        title: "Gladiator",
        year: 2000,
        genre: "Adventure",
        rating: 8.5,
        type: "movie"
    },
    {
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        rating: 9.3,
        type: "movie"
    },
    {
        title: "Fight Club",
        year: 1999,
        genre: "Drama",
        rating: 8.8,
        type: "movie"
    },
];

// Creare una classe Movie che contenga le informazioni sopra indicate.
class Movie {
    constructor(title, year, genre, rating, type, seasons = null) {
      this.title = title;
      this.year = year;
      this.genre = genre;
      this.rating = rating;
      this.type = type;
      this.seasons = seasons;
    }

    // Entrambe le classi dovranno avere un metodo toString() che restituisca una stringa che descriva l'oggetto.
    toStringMovies() {
        return `${this.title} è un film di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}.`;
    }
}

// Creare una classe TvSerie che estenda la classe Movie e ne aggiunta la proprietà seasons.
class TvSerie extends Movie {
    constructor(title, year, genre, rating, type, seasons) {
      super(title, year, genre, rating, type);
      this.seasons = seasons;
    }
    // Entrambe le classi dovranno avere un metodo toString() che restituisca una stringa che descriva l'oggetto.
    toStringSeries() {
        return `${this.title} è una serie tv di genere ${this.genre}. E' stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}.`;
    }
}

// Tramite la funzione .map(), creare un nuovo array dove per ogni elemento dell'array
// viene creata un istanza della classe Movie o TvSerie in base al type e salvata nel nuovo array.
netflixArchive.map((product) => {
    if(product.type === "movie") {
        product = new Movie(product.title, product.year, product.genre, product.rating, product.type);
        console.log(product.toStringMovies());
    } else {
        product = new TvSerie(product.title, product.year, product.genre, product.rating, product.type, product.seasons);
        console.log(product.toStringSeries());
    }
})

// Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere.
// Prevedere un argomento per la lista dei film ed uno per il genere.
const getVote = (array, genre) => {
    let vote = 0;
    let counter = 0;
    array.forEach((product => {
        if(product.genre === genre) {
            vote += product.rating;
            counter++;
        }
    }));
    return genre && (vote / counter).toFixed(1);
}
console.log(getVote(netflixArchive, "Action"));


// Creiamo una funzione che restituisca la lista di tutti i generi dei film, senza che questi si ripetano.
function getGenres(array) {
    let genre = [];
    array.forEach((product) => {
        if(!genre.includes(product.genre)) {
            genre.push(product.genre);
        }
    });
    return genre;
}
console.log(getGenres(netflixArchive));

