import { Component, OnInit } from '@angular/core';
import { Game } from './models/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Displaying Data Demo';
  // @ts-ignore
  private games!: Game[];
  // @ts-ignore
  game!: Game; 

  constructor() {
    this.games = [
      new Game('Super Mario', '13 September 1985'),
      new Game('Legend of Zelda', '21 February 1986'),
      new Game('Sonic', '26 June 1981'),
    ];
  }
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.game = this.games[0];
  }
}
