import { Component } from '@angular/core';
import { trigger, transition, style, state, animate, keyframes } from '@angular/animations';
import { GestioneProfiloService } from 'src/app/services/gestione-profilo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('newPage', [ 
      state(
        'open',
        style({
          left: '0'
        })
      ),
      state(
        'closed',
        style({
            left: '-100%'
        })
      ),
        transition('open => closed', [
          animate(
            '0.3s',
            keyframes([
              style({ left: '0', offset: '0'}),
              style({ left: '-50%', offset: '0.5'}),
              style({ left: '-100%', offset: '1'}),
            ])
          )
        ])
    ]),
  ]
})
export class AppComponent {
  title = '2_ang_MovieReview';

  constructor(public gestioneProfiloService: GestioneProfiloService){}

  isOpen = this.gestioneProfiloService.isOpen;
  
}
