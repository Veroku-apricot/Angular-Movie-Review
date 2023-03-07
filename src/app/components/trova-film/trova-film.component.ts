import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GestioneProfiloService } from 'src/app/services/gestione-profilo.service';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-trova-film',
  templateUrl: './trova-film.component.html',
  styleUrls: ['./trova-film.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s', style({opacity: 1}))
      ])
    ])
  ]
})
export class TrovaFilmComponent {

  isVisible = false;

  movieForm: FormGroup = new FormGroup({
    titoloFilm: new FormControl("Pokémon: Jirachi, Wish Maker", Validators.required),
    tipologia: new FormControl("Family/Action"),
    anno: new FormControl(null),
  })

  constructor(
    private gestioneProfiloService: GestioneProfiloService,
    private router: Router,
    private http: HttpServiceService
  ){}

  search = "Shrek";

  movies : any = [];

  searchMovie(){
    this.http.getData(this.search).subscribe((data : any) => {
      console.log(data.Search);
      this.movies = data.Search;
    })

    this.isVisible = true;
    
  }

  addMovie(index : number){
    let movie = {
      nome: this.movies[index].Title,
      anno: this.movies[index].Year,
      poster: this.movies[index].Poster,
      id: this.movies[index].imdbID
    }

    this.gestioneProfiloService.addMovie(movie);
    this.gestioneProfiloService.pageAnimation("/lista-film");
    this.gestioneProfiloService.openSnackBar('Il film è stato aggiunto alla lista!');
  }
}
