import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username:string = "aneachi";
  log:boolean = false;
  favGame:string = '';

  saludar():void{
    alert('Hola ' + this.username)
  }

  cambiarEstado():void{
    this.log = !this.log
  }

  getFavorito(nombreJuego:string){
    this.favGame = nombreJuego;
  }
}
