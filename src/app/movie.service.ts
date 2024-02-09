import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [

    {id:1, title:'Prison Break', year:'1972', director:'Francis Ford Coppola'},
    {id:2, title:'Teen Wolf',year:'1990', director:'The Coen Brothers'},
    {id:3, title:'Game Of Thrones',year:'1990', director:'The Coen Brothers'},
    {id:4, title:'The 100',year:'1990', director:'Damien Chzazelle'}
  ];

  getMovies(){
    return this.movieList;
  }
}
