import { IStorage } from "../Core/IStorage";
import { Movie } from "../Core/Movie";
import { IHttpClient } from "./HttpClient/IHttpClient";

export class ApiConsumer {
    _httpClient: IHttpClient;
    _storage: IStorage<Movie>;

    constructor(httpClient: IHttpClient, storage: IStorage<Movie>) {
        this._httpClient = httpClient;
        this._storage = storage;
    }

    syncMovies(): Promise<any> {
        return this.getTopRatedMovies().then(movies => {
            this.saveToDatabase(movies);
        });
    }

    getTopRatedMovies(): Promise<Movie[]> {
        const urlToMoviesDb = "";

        return this._httpClient.get(urlToMoviesDb).then(response => {
            // let jsonResponse = JSON.parse(response);

            const jsonMovies: IExternalMovie[] = JSON.parse(response).results;

            const listOfMovies: Movie[] = [];

            jsonMovies.map(jm => {
                const movie = this._mapJsonToMovie(jm);
                listOfMovies.push(movie);
            });

            return listOfMovies;
        });
        // ======== OLD
        // Convert to list of storage
        // let jsonResponse = JSON.parse(moviesAsString);
        // console.log(jsonResponse)
        // let jsonMovies = jsonResponse.results;

        // console.log(jsonMovies[2]);
        // let listOfMovies: Movie[] = [];

        // jsonMovies.map(jm => {
        //     const movie = this._mapJsonToMovie(jm);
        //     listOfMovies.push(movie);
        // })

        // return listOfMovies;
    }

    saveToDatabase(movies: Movie[]) {
        movies.map(m => {
            this._storage.store(m);
        });
    }

    _mapJsonToMovie(jsonMovie: IExternalMovie): Movie {
        const id = jsonMovie.id;
        const name = jsonMovie.title;
        const overview = jsonMovie.overview;
        const popularity = jsonMovie.popularity;
        const posterPath = jsonMovie.poster_path;

        const movie = new Movie(id, name);
        movie.overview = overview;
        movie.popularity = popularity;
        movie.posterPath = posterPath;
        // console.log(movie);
        return movie;
    }
}

interface IExternalMovie {
    id: string;
    title: string;
    overview: string;
    popularity: string;
    poster_path: string;
}
