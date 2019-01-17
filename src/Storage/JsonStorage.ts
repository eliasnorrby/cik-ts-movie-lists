import { access, readFile, writeFileSync } from "fs";
import { IStorage } from "../Core/IStorage";
import { Movie } from "../Core/Movie";
import { Settings } from "../Settings";

export class JsonStorage implements IStorage<Movie> {
  private _movies = [];
  private connectionString: string;

  constructor(settings: Settings) {
    this.connectionString = settings.connectionString;
    access(this.connectionString, err => {
      if (err) {
        const testMovies = [new Movie("1", "The Matrix")];
        writeFileSync(this.connectionString, JSON.stringify(testMovies));
        // tslint:disable-next-line:no-console
        console.log("Database was created");
      } else {
        // tslint:disable-next-line:no-console
        console.log("Database exists");
      }
    });
  }

  load(id: string) {
    return this._movies.find(m => m.id === id);
  }

  store(movie: Movie): void {
    this._movies.push(movie);
  }

  delete(movie: Movie): void {
    this._movies = this._movies.filter(m => m.id !== movie.id);
  }

  all(): Promise<Movie[]> {
    return this.readMoviesFromDb().then(data => {
      return JSON.parse(data);
    });
  }

  private readMoviesFromDb(): Promise<any> {
    return new Promise((resolve, reject) => {
      readFile(this.connectionString, "utf8", (err, data) => {
        // tslint:disable-next-line:no-console
        console.log(data);
        err ? reject(err) : resolve(data);
      });
    });
  }
}
