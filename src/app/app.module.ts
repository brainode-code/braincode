import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';

import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from './task-item/task-item.component';
import { ModalComponent } from './modal/modal.component';
import { ButtonComponent } from './shared/button/button.component';



@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    FormComponent,
    TaskItemComponent,
    ModalComponent,
    ButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
