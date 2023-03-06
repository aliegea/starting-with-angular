import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../models';
import { ISeller } from '../models/seller.model';
import { GameStockService } from '../services/game-stock.service';

@Component({
  selector: 'app-game-sellers',
  templateUrl: './game-sellers.component.html',
  styleUrls:['./game-sellers.component.css']
})
export class GameSellersComponent implements OnInit {
  sellers: ISeller[] = [];
  gameName! :string;
  addMode = false;
  sortAsc:boolean = true;
  filterAll:boolean = true;

noSellerMsg:string='There are no sellers...';
  constructor(
    private activateRoute: ActivatedRoute,
    private gameStockService: GameStockService,
    private route:Router
  ) {}

  toggleAddMode() {
    this.addMode = !this.addMode;
    this.route.navigate(['seller/new'])
  }
  toggleFilter(filterAll:boolean){
    this.filterAll=filterAll
  }
  toggleSort(sortAsc:boolean){
    this.sortAsc=sortAsc
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.gameStockService.getGame(id).subscribe({
      next: (g) => {
        this.gameName = g.name;
        this.sellers = g.sellers || [];
      }
    });
  }
}
