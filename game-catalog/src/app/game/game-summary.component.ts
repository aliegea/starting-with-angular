import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../models/game.model';
import { GameStockService } from '../services/game-stock.service';

@Component({
  selector: 'app-game-summary',
  templateUrl: './game-summary.component.html',
})
export class GameSummaryComponent {
  constructor(private gameStockService:GameStockService,private route:Router){

  }
  @Input() game!: Game; // @Input() game;

  @Output() gameChange: EventEmitter<string> = new EventEmitter<string>();



  selectedGame(gameName: string) {
    this.gameChange.emit(gameName);
  }
  delete(gamename:string){
    confirm(`Are you sure you want to delete${this.game.name}`)
    this.gameStockService.deleteGame(gamename).subscribe((data:Game)=>this.route.navigate(['/games']))
  }

}

/*
-> modulos angular
-> module
-> shared
-> core
-> feature -> 'area negocio'
*/

// []
