import { Component } from '@angular/core';
import { GestioneProfiloService } from 'src/app/services/gestione-profilo.service';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-scheda-film',
  templateUrl: './scheda-film.component.html',
  styleUrls: ['./scheda-film.component.css']
})
export class SchedaFilmComponent {

  movieDetails : any = {};

  constructor(
    private gestioneProfiloService: GestioneProfiloService,
    private http: HttpServiceService
  ){}

  ngOnInit(){
    let listIndex = this.gestioneProfiloService.listaSelezionata;
    let movieIndex = this.gestioneProfiloService.filmSelezionato;
    let movie = this.gestioneProfiloService.liste[listIndex].film[movieIndex];
    let movieID = movie.id;

    this.http.getMovieDetails(movieID).subscribe((data : any) => {
      console.log(data);
      
      this.movieDetails = data;
    })
  }

  pageAnimation(string : string){
    this.gestioneProfiloService.pageAnimation(string);
  }
}
