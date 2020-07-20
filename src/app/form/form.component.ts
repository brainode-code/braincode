
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskForm } from './form.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../shared/button/services/task.service';

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
    public TaskService: TaskService) {

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
}

