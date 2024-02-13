const express = require("express");
const app = express();
const port = 8000;

// Créer une route GET /, qui doit renvoyer "Welcome to my favourite movie list"

app.get("/", (req, res) => {
    res.send("Welcome to my favourite movie list");
  });


// Créer une route GET /api/movies, cette route doit renvoyer un état 200 et une liste de films au format json (utilise le tableau movies déclaré dans l'app ;) )

const getMovies = (req, res) => {
    res.status(200).json(movies);
  };

app.get("/api/movies", getMovies);

// Créer une route GET /api/movies/:id qui ne retournera que le film correspondant à l'id défini dans l'url (tu peux parcourir le tableau movies avec une boucle for, ou utiliser la méthode .find())
// S'il y a un film qui correspond aux paramètres, renvoie une réponse avec un statut 200 et le film correspondant comme objet json
// Sinon, renvoie un statut 404 avec un message "Not Found".

const getMovieById = (req, res) => {
    const movieId = parseInt(req.params.id);
    const foundMovie = movies.find(movie => movie.id === movieId);

    if (foundMovie) {
        res.status(200).json(foundMovie);
    } else {
        res.status(404).json({message: 'Not Found'});
    }
};

app.get('/api/movies/:id', getMovieById);

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });



