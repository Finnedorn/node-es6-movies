// Definire un array di oggetti; ogni oggetto rappresenta un film o serie tv,
// che è caratterizzato da: title, year, genre, rating, type (movie o tv), seasons (solo per serie tv).
const netflixArchive = [
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    type: "movie",
  },
  {
    title: "Breaking Bad",
    year: 2008,
    genre: "Crime",
    rating: 9.5,
    type: "tv",
    seasons: 5,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    type: "movie",
  },
  {
    title: "Stranger Things",
    year: 2016,
    genre: "Fantasy",
    rating: 8.7,
    type: "tv",
    seasons: 4,
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: "Action",
    rating: 8.7,
    type: "movie",
  },
  {
    title: "Game of Thrones",
    year: 2011,
    genre: "Adventure",
    rating: 9.2,
    type: "tv",
    seasons: 8,
  },
  {
    title: "The Irishman",
    year: 2019,
    genre: "Crime",
    rating: 7.8,
    type: "movie",
  },
  {
    title: "Narcos",
    year: 2015,
    genre: "Crime",
    rating: 8.8,
    type: "tv",
    seasons: 3,
  },
  {
    title: "Money Heist",
    year: 2017,
    genre: "Action",
    rating: 8.3,
    type: "tv",
    seasons: 5,
  },
  {
    title: "The Crown",
    year: 2016,
    genre: "History",
    rating: 8.6,
    type: "tv",
    seasons: 5,
  },
  {
    title: "BoJack Horseman",
    year: 2014,
    genre: "Animation",
    rating: 8.7,
    type: "tv",
    seasons: 6,
  },
  {
    title: "The Queen's Gambit",
    year: 2020,
    genre: "Drama",
    rating: 8.6,
    type: "tv",
    seasons: 1,
  },
  {
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    rating: 9.2,
    type: "movie",
  },
  {
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
    type: "movie",
  },
  {
    title: "Gladiator",
    year: 2000,
    genre: "Adventure",
    rating: 8.5,
    type: "movie",
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    type: "movie",
  },
  {
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    rating: 8.8,
    type: "movie",
  },
];

// Creare una classe Movie che contenga le informazioni sopra indicate.
class Movie {
  #title;
  #year;
  #genre;
  #rating;
  #type;

  constructor(title, year, genre, rating, type) {
    this.#title = title;
    this.#year = parseInt(year);
    this.#genre = genre;
    this.#rating = parseInt(rating).toFixed(1);
    this.#type = type;
  }

  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value.toString();
  }

  get year() {
    return this._year;
  }
  set year(value) {
    this._year = parseInt(value);
  }

  get genre() {
    return this._genre;
  }
  set genre(value) {
    this._genre = value.toString();
  }

  get rating() {
    return this._rating;
  }
  set rating(value) {
    this._rating = parseInt(value).toFixed(1);
  }

  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value.toString();
  }

  // Entrambe le classi dovranno avere un metodo toString() che restituisca una stringa che descriva l'oggetto.
  toString() {
    return `${this.#title} è un film di genere ${
      this.#genre
    }. E' stato rilasciato nel ${this.#year} ed ha un voto di ${this.#rating}.`;
  }
}

// Creare una classe TvSerie che estenda la classe Movie e ne aggiunta la proprietà seasons.
class TvSerie extends Movie {
  #seasons;
  constructor(title, year, genre, rating, type, seasons) {
    super(title, year, genre, rating, type);
    this.#seasons = parseInt(seasons);
  }

  get seasons() {
    return this._seasons;
  }
  set seasons(value) {
    this._seasons = parseInt(value);
  }

  // Entrambe le classi dovranno avere un metodo toString() che restituisca una stringa che descriva l'oggetto.
  toString() {
    return `${this.title} è una serie tv di genere ${
      this.genre
    }. E' stata rilasciata nel ${this.year} ed in totale sono state prodotte ${
      this.#seasons
    } stagioni. Ha un voto di ${this.rating}.`;
  }
}

// Tramite la funzione .map(), creare un nuovo array dove per ogni elemento dell'array
// viene creata un istanza della classe Movie o TvSerie in base al type e salvata nel nuovo array.
const moviesAndSeries = netflixArchive.map((product) => {
  if (product.type === "movie") {
    return (product = new Movie(
      product.title,
      product.year,
      product.genre,
      product.rating,
      product.type
    ));
  } else {
    return (product = new TvSerie(
      product.title,
      product.year,
      product.genre,
      product.rating,
      product.type,
      product.seasons
    ));
  }
});

// Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere.
// Prevedere un argomento per la lista dei film ed uno per il genere.
const getVote = (array, genre) => {
  let vote = 0;
  let counter = 0;
  array.forEach((product) => {
    if (product.genre === genre) {
      vote += product.rating;
      counter++;
    }
  });
  return genre && (vote / counter).toFixed(1);
};
getVote(netflixArchive, "Action");

// Creiamo una funzione che restituisca la lista di tutti i generi dei film, senza che questi si ripetano.
const getGenres = (array) => {
  let genre = [];
  array.forEach((product) => {
    if (!genre.includes(product.genre)) {
      genre.push(product.genre);
    }
  });
  return genre;
};
getGenres(netflixArchive);

// Creiamo una funzione che filtri i film in base ad un genere passato come argomento e ne ritorni un array con all'interno il risultato della funzione toString() di ogni film.
function filterByGenre(array, genre) {
  return array
    .filter((product) => product.genre === genre)
    .map((product) => {
      return product.toString();
    });
}
filterByGenre(moviesAndSeries, "Action", "movie");

// Creare una classe Cart dove poter salvare i film che si intende noleggiare. Tramite delle funzioni, poter aggiungere o togliere dei film dal carrello.
class Cart {
  #cartArray;
  #counterPrice;

  constructor(product) {
    this.product = product;
    this.#cartArray = [];
    this.#counterPrice = 0;
  }

  //Tramite delle funzioni, poter aggiungere o togliere dei film dal carrello.
  addProduct(product) {
    this.#cartArray.push(product);
    this.#counterPrice++;
  }
  removeProduct(product) {
    this.#cartArray.splice(this.#cartArray.indexOf(product), 1);
    this.#counterPrice--;
  }
  //Creare poi una funzione che stampi il costo totale dei film da noleggiare, dove per ogni film occorre specificare un prezzo fisso di 3.99
  getPrice() {
    return `Il tuo carrello ha un prezzo di ${this.#counterPrice * 3.99}$`;
  }
}

const cart = new Cart(moviesAndSeries);
cart.addProduct(moviesAndSeries[0]);
cart.addProduct(moviesAndSeries[1]);
cart.removeProduct(moviesAndSeries[0]);
cart.getPrice();
