import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GestioneProfiloService } from 'src/app/services/gestione-profilo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crea-lista-film',
  templateUrl: './crea-lista-film.component.html',
  styleUrls: ['./crea-lista-film.component.css']
})
export class CreaListaFilmComponent {

  tagButtons = [
    {
      color: "purple",
      text: "Da vedere"
    },
    {
      color: "orange",
      text: "Preferiti"
    },
    {
      color: "green",
      text: "Piaciuti"
    },
    {
      color: "blue",
      text: "Nella Media"
    },
    {
      color: "red",
      text: "Non Piaciuti"
    }
  ]

  listForm: FormGroup = new FormGroup({
    titoloLista: new FormControl("Nuova lista", Validators.required),
    tag: new FormControl(null, Validators.required),
  })
  
  constructor(
    private gestioneProfiloService: GestioneProfiloService,
    private router: Router
  ){}

  addList(){
    let lista = {
      titoloLista: this.listForm.value.titoloLista,
      tag: this.listForm.value.tag,
      film: []
    }

    this.gestioneProfiloService.addList(lista);
    this.gestioneProfiloService.pageAnimation("/home");
    this.gestioneProfiloService.openSnackBar('Lista creata!');
  }
  
}
