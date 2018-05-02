import { Injectable } from '@angular/core';
import { Movies } from './moviesInterface';
import { movieList } from '../../sample-movies';
import * as _ from 'underscore';

@Injectable()
export class MoviesService {
movies:Array<Movies> = movieList;
constructor() { }

getMovies(){
  console.log(this.movies)
  return this.movies;
}

getMovie(id){
 
  return _.findWhere(this.movies, { id });
}

}
