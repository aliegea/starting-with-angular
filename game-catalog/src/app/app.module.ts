import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameSummaryComponent } from './game/game-summary.component';
import { GameStockService } from './services/game-stock.service';
import { GameSellersComponent } from './game/game-sellers.component';
import { CreateGameComponent } from './game/create-game.component';
import { GameListComponent } from './game/game-list.component';
import { appRoutes } from './app.routes';
import { CreateSellerComponent } from './seller/create-seller.component';
import { SellerCategoryService } from './services/seller-category.service';
import { NavbarComponent } from './shell/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserModule } from './user/user.module';
import { SellerDetailsComponent } from './seller/seller-details.component';
import { ErrorComponent } from './error.component';
import {
  checkDirtyState,
  CHECK_DIRTY_TOKEN,
} from './guards/check-dirty.service';
import { MaterialModule } from './shared/material.module';
import { SellerListComponent } from './seller/seller-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from "./pipes/pipes.module";

// ngModel
// ngForm
@NgModule({
    declarations: [
        AppComponent,
        GameSummaryComponent,
        GameSellersComponent,
        CreateGameComponent,
        GameListComponent,
        CreateSellerComponent,
        NavbarComponent,
        SellerDetailsComponent,
        ErrorComponent,
        SellerListComponent,
    ],
    providers: [
        GameStockService,
        SellerCategoryService,
        {
            provide: CHECK_DIRTY_TOKEN,
            useValue: checkDirtyState,
        },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        UserModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
        PipesModule
    ]
})
export class AppModule {}
