
import { Component, OnInit } from '@angular/core';
import { TaskForm } from './form.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../shared/button/services/task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;
  public visible = false;
  public valuesArras: Array<TaskForm>;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    public TaskService: TaskService
  ) {

    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      deadline: ['', Validators.required],
      hours: ['', Validators.required],
      minutes: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.valuesArras = this.TaskService.getTasks() ? this.TaskService.getTasks() : [];
    this.TaskService.taskToEdit ?
      this.formGroup.patchValue({
        title: this.TaskService.taskToEdit.title,
        description: this.TaskService.taskToEdit.description,
        deadline: this.TaskService.taskToEdit.deadline,
        hours: this.TaskService.taskToEdit.hours,
        minutes: this.TaskService.taskToEdit.minutes,
        value: this.TaskService.taskToEdit.value,
      }) : null;
  }

  public onSubmit(form: FormGroup) {
    if (this.formGroup.valid) {
      form.value.id = Math.round(Math.random() * 10000);
      this.valuesArras = this.TaskService.addTask(form.value);
      this.visible = true;
      this.formGroup.reset();
      this.TaskService.hideForm();
    } else {
      this.TaskService.validateAllFormFields(this.formGroup);
    }
  }

  onClose() {
    this.TaskService.hideForm()
  }

  public editForm(form: FormGroup) {
    const arr = this.TaskService.getTasks();
    const task = this.TaskService.taskToEdit;
    const index = arr.findIndex(Task => Task.id === task.id);
    if (this.formGroup.valid) {

      arr[index].deadline = this.formGroup.value.deadline;
      arr[index].description = this.formGroup.value.description;
      arr[index].hours = this.formGroup.value.hours;
      arr[index].minutes = this.formGroup.value.minutes;
      arr[index].title = this.formGroup.value.title;
      arr[index].value = this.formGroup.value.value;

      this.TaskService.getEditTask(null)
      this.TaskService.hideForm()
    }

    else {
      this.TaskService.validateAllFormFields(this.formGroup);
    }

  }

}

