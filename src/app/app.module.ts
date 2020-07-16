import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ButtonComponent } from './shared/button/button.component';
import { FormComponent } from './form/form.component';
import { AuctionBoardComponent } from './auction-board/auction-board.component';
import { AuctionFormComponent } from './auction-board/auction-form/auction-form.component';



@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ButtonComponent,
    FormComponent,
    AuctionBoardComponent,
    AuctionFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
