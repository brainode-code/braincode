import { Injectable } from '@angular/core';
import { TaskForm } from 'src/app/form/form.model';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  private tasks: Array<TaskForm> = [];
  /// hide form on submit
  public isVisible: boolean = false;
  public isEditForm: boolean;
  public taskToEdit: TaskForm;

  public addTask(task: TaskForm): TaskForm[] {
    this.tasks.push(task);
    return this.getTasks();
  }

  public getTasks(): TaskForm[] {
    return this.tasks;
  }

  public getTask(id: number): Array<TaskForm> {
    return this.tasks.filter(task => task.id === id);
  }

  public updateTask(task: TaskForm): void {
    const index = this.tasks.findIndex(Task => Task.id === task.id);
    this.tasks[index] = task;
  }

  public removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  public generatorOptions(amount: number, step: number): Array<number> {
    const options: Array<number> = [];
    for (let i = 0; i < amount + 1; i++) {
      options.push(i * step);
    }
    return options;
  }

  public validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  public isFieldValid(field: string, formGroup: FormGroup): boolean {
    return !formGroup.get(field).valid && formGroup.get(field).touched;
  }

  public checkerCss(field: string, formGroup: FormGroup): Object {
    return {
      'has-error': this.isFieldValid(field, formGroup),
      'has-feedback': this.isFieldValid(field, formGroup)
    };
  }

  public hideForm(): boolean {
    return this.isVisible = !this.isVisible;
  }

  public checkForm(result: boolean): boolean {
    return this.isEditForm = result;
  }

  public getEditTask(task: TaskForm): TaskForm {
    return this.taskToEdit = task;
  }
}
