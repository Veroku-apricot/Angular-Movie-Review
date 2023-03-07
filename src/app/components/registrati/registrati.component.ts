import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GestioneProfiloService } from 'src/app/services/gestione-profilo.service';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css']
})
export class RegistratiComponent {

  registerForm: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
    nascita: new FormControl(null),
    descrizione: new FormControl(null)
  })

  constructor(
    private gestioneProfiloService: GestioneProfiloService,
    private router: Router
    ){}

  onSubmit(){
    this.gestioneProfiloService.registerUser(this.registerForm.value);
    this.router.navigate(["/login"]);
  }
}
