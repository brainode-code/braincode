import { Component, OnInit } from '@angular/core';
import { TaskForm } from './form.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;
  public title = '';
  public description = '';
  public deadline: Date;
  public value: number;

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

  ngOnInit(): void {
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
