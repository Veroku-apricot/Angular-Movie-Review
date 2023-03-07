import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { GestioneProfiloService } from 'src/app/services/gestione-profilo.service';

@Component({
  selector: 'app-info-personali',
  templateUrl: './info-personali.component.html',
  styleUrls: ['./info-personali.component.css']
})
export class InfoPersonaliComponent {

  //nomeUtente = "";

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required)
  })

  constructor(
    private gestioneProfiloService: GestioneProfiloService,
    private router: Router
    ){}

  // saveName(){
  //   this.gestioneProfiloService.saveName(this.nomeUtente);
  // }

  onSubmit(){
    let userExists = this.gestioneProfiloService.login(this.loginForm.value);
    
    if(userExists){
      this.pageAnimation("/home");
    }
    
  }

  pageAnimation(string : string){
    this.gestioneProfiloService.pageAnimation(string);
  }
}
