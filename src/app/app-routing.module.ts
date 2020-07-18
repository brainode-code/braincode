import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskItemComponent } from './task-item/task-item.component';


const routes: Routes = [
  // { path: '', component: BoardComponent },
  { path: 'edit-task/:id', component: EditTaskComponent },
  { path: 'task-item', component: TaskItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
