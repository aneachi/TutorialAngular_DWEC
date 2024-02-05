import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <p>Los juegos favoritos de {{nombreUsu}} son:</p>
    <ul>
    @for (game of games; track game.id) {
      <li (click)="juegoFav(game.name)">{{ game.name }}</li>
    }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() nombreUsu:string = '';
  @Output() comunicadorEventHijoPadre = new EventEmitter<string>();
  games = [
    {
      id:1,
      name: "Uncharted 4"
    },
    {
      id:2,
      name: "Horizon Zero Dawn"
    },{
      id:3,
      name: "Bloodborn"
    }
  ]

  juegoFav(nombre:string):void{
    alert("A " + this.nombreUsu + " le gusta jugar a " + nombre);
    this.comunicadorEventHijoPadre.emit(nombre);
  }
}
