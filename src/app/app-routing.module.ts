import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { EditTaskComponent } from './edit-task/edit-task.component';


const routes: Routes = [
  { path: '', component: BoardComponent },
  { path: 'edit-task/:id', component: EditTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
