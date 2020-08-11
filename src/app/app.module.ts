import { AuthGuardGuard } from './log-in-popup/auth-service/auth-guard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';

import { FormComponent } from './form/form.component';
import { AuctionBoardComponent } from './auction-board/auction-board.component';
import { AuctionFormComponent } from './auction-board/auction-form/auction-form.component';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from './task-item/task-item.component';
import { ModalComponent } from './modal/modal.component';
import { ErrorFieldComponent } from './form/error-field/error-field.component';
import { LogInPopupComponent } from './log-in-popup/log-in-popup.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { CardFormComponent } from './shared/card-form/card-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';
import { AngularFireAuthModule } from '@angular/fire/auth';


// ng-zorro
import { NzModalService, NzModalModule } from 'ng-zorro-antd/modal';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    FormComponent,
    AuctionBoardComponent,
    AuctionFormComponent,
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
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports: [NzModalModule],
  providers: [AuthGuardGuard, NzModalService],
  bootstrap: [AppComponent],
})
export class AppModule { }
