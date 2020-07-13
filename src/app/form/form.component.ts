import { Component, OnInit } from '@angular/core';
import { TaskForm } from './form.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      deadline: ['', Validators.required],
      hours: ['', Validators.required],
      minutes: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  public onSubmit(form: TaskForm): void {
    console.log(form.value);
  }

  public generatorOptions(amount: number, step: number): Array<number> {
    let options: Array<number> = [];
    for (let i = 0; i < amount + 1; i++) {
      options.push(i * step)
    }
    return options;
  }
}

