import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { InfoPersonaliComponent } from './components/info-personali/info-personali.component';
import { RegistratiComponent } from './components/registrati/registrati.component';
import { CreaListaFilmComponent } from './components/crea-lista-film/crea-lista-film.component';
import { HomeComponent, DialogContentListComponent } from './components/home/home.component';
import { ListaFilmComponent, DialogContentComponent } from './components/lista-film/lista-film.component';
import { TrovaFilmComponent } from './components/trova-film/trova-film.component';
import { RecensioneFilmComponent } from './components/recensione-film/recensione-film.component';
import { SchedaFilmComponent } from './components/scheda-film/scheda-film.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    InfoPersonaliComponent,
    CreaListaFilmComponent,
    HomeComponent,
    DialogContentListComponent,
    ListaFilmComponent,
    DialogContentComponent,
    TrovaFilmComponent,
    RecensioneFilmComponent,
    RegistratiComponent,
    SchedaFilmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSlideToggleModule,

    BrowserAnimationsModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'it'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
