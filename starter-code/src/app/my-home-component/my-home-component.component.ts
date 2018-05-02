import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/Movies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  movies: any;
  constructor(public movieSample : MoviesService, public router:Router) {
    this.movies = this.movieSample.getMovies();
   }

  ngOnInit() {
    console.log(this.movies)
  }
}
