
import { Component, OnInit } from '@angular/core';
import { TaskForm } from './form.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;
  public visible = false;
  public valuesArras: Array<TaskForm>;

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
    this.valuesArras = [];
  }

  public generatorOptions(amount: number, step: number): Array<number> {
    let options: Array<number> = [];
    for (let i = 0; i < amount + 1; i++) {
      options.push(i * step);
    }
    return options;
  }

  public onSubmit(form: FormGroup) {
    if (this.formGroup.valid) {
      this.valuesArras.push(form.value);
      this.visible = true;
      this.formGroup.reset()
    } else {
      this.validateAllFormFields(this.formGroup);
    }
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

  public isFieldValid(field: string) {
    return !this.formGroup.get(field).valid && this.formGroup.get(field).touched;
  }

  public checkerCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
}

