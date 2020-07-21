import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';

import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskItemComponent } from './task-item/task-item.component';
import { ModalComponent } from './modal/modal.component';
import { ErrorFieldComponent } from './form/error-field/error-field.component';
import { LogInPopupComponent } from './log-in-popup/log-in-popup.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { CardFormComponent } from './shared/card-form/card-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import * as firebase from 'firebase';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    FormComponent,
    TaskItemComponent,
    ErrorFieldComponent,
    LogInPopupComponent,
    EditTaskComponent,
    ModalComponent,
    ErrorFieldComponent,
    CardFormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
