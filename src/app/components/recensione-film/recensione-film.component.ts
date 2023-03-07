import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GestioneProfiloService } from 'src/app/services/gestione-profilo.service';

@Component({
  selector: 'app-recensione-film',
  templateUrl: './recensione-film.component.html',
  styleUrls: ['./recensione-film.component.css']
})
export class RecensioneFilmComponent {

  recensione = {
    stars: [
      false,
      false,
      false,
      false,
      false
    ],
    testo: "I have so much nostalgia for this film, and it may just be my all time favourite one."
  }

  recensioneOriginale: any = {};

  movie : any = '';

  canEdit = true;
  editButton = false;

  constructor(private gestioneProfiloService: GestioneProfiloService){}

  starPath = this.gestioneProfiloService.starPath;
  emptyStarPath = this.gestioneProfiloService.emptyStarPath;

  ngOnInit(){
    let listIndex = this.gestioneProfiloService.listaSelezionata;
    let movieIndex = this.gestioneProfiloService.filmSelezionato;
    let movie = this.gestioneProfiloService.liste[listIndex].film[movieIndex];
    this.movie = movie;
    console.log(this.movie)

    if (movie.recensione != undefined) {
      this.recensione = movie.recensione;

      this.canEdit = false;
      this.editButton = true;
    }
    
  }

  rate(index :number){
    for (let i = 0; i < this.recensione.stars.length; i++) {
      this.recensione.stars[i] = false  
    }

    for (let i = 0; i < index +1; i++) {
      this.recensione.stars[i] = true;
    }
  }

  sendReview(review : object){
    this.gestioneProfiloService.addReview(review);
    this.gestioneProfiloService.openSnackBar('Recensione effettuata!');
    this.gestioneProfiloService.pageAnimation("/lista-film");
  }

  editReview(){
    let originalStars = [...this.recensione.stars];
    let originalTxt = this.recensione.testo;
    this.recensioneOriginale = {stars: originalStars, testo: originalTxt};
    this.canEdit = !this.canEdit;
  }

}
