import { Component, Inject } from '@angular/core';
import { GestioneProfiloService } from 'src/app/services/gestione-profilo.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s', style({opacity: 1}))
      ])
    ])
  ]
})
export class HomeComponent {

  utente : string | null = "";

  listExists = false;

  isVisible = false;

  search = "";

  constructor(
    private gestioneProfiloService: GestioneProfiloService,
    private router: Router,
    public dialog: MatDialog
  ){}

  liste = this.gestioneProfiloService.liste;

  filter(){
    this.liste = this.gestioneProfiloService.liste;
    let listaFiltrata = this.liste.filter(lista => lista.titoloLista.toLowerCase().includes(this.search));

    if (this.search != "") {
      this.liste = listaFiltrata;
    } 
  }

  ngOnInit(){
    // this.gestioneProfiloService.getName();
    this.utente = this.gestioneProfiloService.utenteLoggato.username;

    if (this.liste.length > 0) {
      this.listExists = true;
      this.isVisible = true;
    }
    
    if (this.utente == null) {
      this.router.navigate(["/login"]);
    } 
  }

  openList(index: number){
    this.gestioneProfiloService.listaSelezionata = index;
    this.pageAnimation("/lista-film");
  }

  openDialog(index: number) {
    this.openList(index);
    let selectedList = this.liste[index];

    const dialogRef = this.dialog.open(DialogContentListComponent, {
      data: { name: selectedList.titoloLista }
    });
  }

  pageAnimation(string: string ){
    this.gestioneProfiloService.pageAnimation(string);
  }

}

@Component({
  selector: 'dialog-content-list',
  templateUrl: 'dialog-list.html'
})
export class DialogContentListComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}, private gestioneProfiloService: GestioneProfiloService,) { }

  remove(){
    this.gestioneProfiloService.removeList();
    this.gestioneProfiloService.openSnackBar('La lista è stata eliminata!');
  }
}
