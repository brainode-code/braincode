import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ButtonComponent } from './shared/button/button.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskItemComponent } from './task-item/task-item.component';
import { ErrorFieldComponent } from './form/error-field/error-field.component';
import { LogInPopupComponent } from './log-in-popup/log-in-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ButtonComponent,
    FormComponent,
    TaskItemComponent,
    ErrorFieldComponent,
    LogInPopupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
