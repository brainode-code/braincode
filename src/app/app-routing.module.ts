import { AuctionBoardComponent } from './auction-board/auction-board.component';
import { AuthGuardGuard } from './log-in-popup/auth-service/auth-guard.guard';
import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { BoardComponent } from "./board/board.component";
import { EditTaskComponent } from "./edit-task/edit-task.component";
import { TaskItemComponent } from "./task-item/task-item.component";
import { LogInPopupComponent } from "./log-in-popup/log-in-popup.component";
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  canActivate,
} from "@angular/fire/auth-guard";

const redirectUnathorizedToLogin = (param) => {
  redirectUnauthorizedTo(["login"])
};

const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: 'full' },
  {
    path: "login",
    component: LogInPopupComponent,
  },
  {
    path: "auction-board",
    component: AuctionBoardComponent
  },
  {
    path: "board",
    component: BoardComponent,
    canActivate: [AuthGuardGuard],
    // data: { authGuardPipe: redirectUnathorizedToLogin },
  },
  { path: "edit-task/:id", component: EditTaskComponent },

  { path: '**', redirectTo: 'board' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
