import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies =[];
  public favMovies=[];
  public hidden=true;
  constructor() { }

  ngOnInit() {
  }

  setMovieList(event){
    this.hidden=false;
    this.movies = event.moviesList;
  }
  setFavMovieList(event){
    this.favMovies = event.results;
  }
}

