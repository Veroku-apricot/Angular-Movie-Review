import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GestioneProfiloService {

  //nomeUtente : string | null = "";
  isOpen = true;

  // users : any[] = [{
  //   username: "Apricot",
  //   email: "a@a.a",
  //   password: "a",
  //   nascita: "",
  //   descrizione: "Sono bella"
  // }];
  users : any = {};

  utenteLoggato: any = {};

  liste : any[] = [];

  listaSelezionata = 0;
  filmSelezionato = 0;

  starPath = "../../../assets/img/star_2.png";
  emptyStarPath = "../../../assets/img/starEmpty_2.png";

  // saveName(nome: string){
  //   this.nomeUtente = nome;
  //   localStorage.setItem("username", nome);
  // }

  // getName(){
  //   this.nomeUtente = localStorage.getItem("username");
  // }

  registerUser(user: object){
    let data = JSON.stringify(user);
    localStorage.setItem("user", data);
    console.log(data);
    //this.users.push(user);
  }

  login(user: any){
    let result = false;

    this.users = localStorage.getItem("user");
    this.users = JSON.parse(this.users);
    console.log(this.users);
    if (this.users.email == user.email && this.users.password == user.password) {
        
      result = true;
      this.utenteLoggato = this.users;

    } 

    // for (let i = 0; i < this.users.length; i++) {
    //   if (this.users[i].email == user.email && this.users[i].password == user.password) {
        
    //     result = true;
    //     this.utenteLoggato = this.users[i];
    //     break;
    //   } 
    // }

    return result;
  }

  addList(lista: object){
    this.liste.push(lista);
    console.log(this.liste)
  }
  removeList(){
    let index = this.listaSelezionata;
    this.liste.splice(index, 1);
  }

  addMovie(movie: object){
    let index = this.listaSelezionata;
    this.liste[index].film.push(movie)
  }
  removeMovie(){
    let index = this.listaSelezionata;
    this.liste[index].film.splice(this.filmSelezionato, 1);
  }

  addReview(review: object){
    let listIndex = this.listaSelezionata;
    let movieIndex = this.filmSelezionato;

    this.liste[listIndex].film[movieIndex].recensione = review;
    console.log(this.liste[listIndex].film[movieIndex].recensione)
  }

  constructor(private _snackBar: MatSnackBar, private router: Router,){}

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  pageAnimation(string : string){
    this.isOpen = false;

    setTimeout(() => {
      this.isOpen = true;
      this.router.navigate([string]);
    }, 400)
    
  }
}
