import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BoardComponent } from "./board/board.component";
import { EditTaskComponent } from "./edit-task/edit-task.component";
import { TaskItemComponent } from "./task-item/task-item.component";
import { LogInPopupComponent } from "./log-in-popup/log-in-popup.component";
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  canActivate,
} from "@angular/fire/auth-guard";

const redirectUnathorizedToLogin = () => redirectUnauthorizedTo(["login"]);

const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: 'full' },
  {
    path: "login",
    component: LogInPopupComponent,
  },
  {
    path: "board",
    component: BoardComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedTo },
  },
  { path: "edit-task/:id", component: EditTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
