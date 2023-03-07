import { Component, Inject } from '@angular/core';
import { GestioneProfiloService } from 'src/app/services/gestione-profilo.service';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-lista-film',
  templateUrl: './lista-film.component.html',
  styleUrls: ['./lista-film.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s', style({opacity: 1}))
      ])
    ])
  ]
})
export class ListaFilmComponent {

  isVisible = false;

  filterRew = false;

  search = "";
  checked = true;

  constructor(private gestioneProfiloService: GestioneProfiloService, public dialog: MatDialog){}

  index = this.gestioneProfiloService.listaSelezionata;
  listaFilm = this.gestioneProfiloService.liste[this.index].film;
  tag = this.gestioneProfiloService.liste[this.index].tag;

  starPath = this.gestioneProfiloService.starPath;
  emptyStarPath = this.gestioneProfiloService.emptyStarPath;

  ngOnInit(){
    this.isVisible = true;
  }

  filter(){
    this.listaFilm = this.gestioneProfiloService.liste[this.index].film;
    let listaFiltrata = this.listaFilm.filter((film : any) => film.nome.toLowerCase().includes(this.search));

    if (this.search != "") {
      this.listaFilm = listaFiltrata;
    } 
  }

  selectMovie(index: number, string : string){
    this.gestioneProfiloService.filmSelezionato = index;
    this.pageAnimation(string);
  }

  filterRewMovies(){
    if (!this.filterRew) {
      let listaFiltrata = this.listaFilm.filter((element : any) => {
        return element.recensione == undefined;
      })
      
      this.listaFilm = listaFiltrata;
    } else {
      this.listaFilm = this.gestioneProfiloService.liste[this.index].film;
    }

    this.filterRew = !this.filterRew;
  }

  openDialog(index: number) {
    this.selectMovie(index, '');
    let selectedMovie = this.listaFilm[index];

    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: { name: selectedMovie.nome }
    });
  }

  pageAnimation(string : string){
    if(string != ''){
      this.gestioneProfiloService.pageAnimation(string);
    }  
  }

}

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog.html'
})
export class DialogContentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}, private gestioneProfiloService: GestioneProfiloService,) { }

  remove(){
    this.gestioneProfiloService.removeMovie();
    this.gestioneProfiloService.openSnackBar('Il film è stato rimosso!');
  }
}
