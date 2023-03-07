import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistratiComponent } from './components/registrati/registrati.component';
import { InfoPersonaliComponent } from './components/info-personali/info-personali.component';
import { CreaListaFilmComponent } from './components/crea-lista-film/crea-lista-film.component';
import { ListaFilmComponent } from './components/lista-film/lista-film.component';
import { TrovaFilmComponent } from './components/trova-film/trova-film.component';
import { RecensioneFilmComponent } from './components/recensione-film/recensione-film.component';
import { SchedaFilmComponent } from './components/scheda-film/scheda-film.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'registrati', component: RegistratiComponent },
  { path: 'login', component: InfoPersonaliComponent },
  { path: 'crea-lista', component: CreaListaFilmComponent },
  { path: 'lista-film', component: ListaFilmComponent },
  { path: 'trova-film', component: TrovaFilmComponent },
  { path: 'recensione-film', component: RecensioneFilmComponent },
  { path: 'scheda-film', component: SchedaFilmComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
