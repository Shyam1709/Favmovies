import { Component, OnInit, Input } from '@angular/core';
import { AppConfig } from './../../../config/config.constant';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
@Input() movies: Array<any>=[];
public favMovies=[];
 public movieUrl=AppConfig.baseUrl;
  constructor() { 
  }

  ngOnInit() {
  }
 // setFavMovieList(event){
 //    this.favMovies = event.results;
 //    console.log(this.favMovies);
 //  }
}
