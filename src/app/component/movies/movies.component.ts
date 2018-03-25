import { Component, OnInit } from '@angular/core';
import { JsonApiService } from './../../services/json-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [ JsonApiService ]
})

export class MoviesComponent implements OnInit {
  public movies =[];
  public hidden=true;
  public errorMsg ='';
  public showError : boolean = false;
  public favMovies=[];
  public flag = 'search';
  constructor(private jsonApiService: JsonApiService) { }

  ngOnInit() {
    this.getFavourite();
  }

  //to set movielist data from search component
  setMovieList(event){
    this.hidden=false;
    this.movies = event.moviesList;
  }

  //get data of favourite movies from database
  getFavourite() {
    this.jsonApiService.getFavourite().subscribe((res) =>{
      this.favMovies = res;
      
      console.log(this.favMovies.length);
      this.showError = false;
    },(error:any)=>{
      this.errorMsg = error.statusText;
      this.showError = true;
    })
  }

setFavMovieList(event){
 this.favMovies=event.favMovies;
 this.getFavourite();
}

}

