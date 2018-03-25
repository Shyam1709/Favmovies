import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppConfig } from './../../../config/config.constant';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
	@Input() movies: Array<any>=[];
	@Input() flag: string;
  @Output() favArray= new EventEmitter();
  public movieUrl=AppConfig.baseUrl;
  public favMovies=[];
  constructor() { 
  }

  ngOnInit() {
  }

  setFavMovieList(event){
    this.favMovies=event.favMovies;
    this.favArray.emit({
      'favMovies': this.favMovies
    });
  }
}
