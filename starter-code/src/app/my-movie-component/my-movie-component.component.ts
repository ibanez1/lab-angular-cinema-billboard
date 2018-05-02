import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/Movies.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movieId:number;
  movie: object;
  constructor(private route: ActivatedRoute, public movieSample: MoviesService) { }

  ngOnInit() {
    this.route.params 
    .subscribe((params) => this.movieId = Number(params['id']));
    this.movie = this.movieSample.getMovie(this.movieId)


  }


}
