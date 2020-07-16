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
import { EditTaskComponent } from './edit-task/edit-task.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    FormComponent,
    TaskItemComponent,
    ErrorFieldComponent,
    EditTaskComponent
    ModalComponent,
    ErrorFieldComponent


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
