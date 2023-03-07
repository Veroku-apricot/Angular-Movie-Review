import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  key = "6dae622a";

  constructor(private http: HttpClient) { }

  getData(search: string){
    return this.http.get(`http://www.omdbapi.com/?s=${search}&apikey=${this.key}`)
  }
    
  getMovieDetails(movieID : any){
    return this.http.get(`http://www.omdbapi.com/?i=${movieID}&apikey=${this.key}`)
  }
    



 

    
    
 
 
  

  
}
