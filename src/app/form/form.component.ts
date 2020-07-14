
import { Component, OnInit } from '@angular/core';
import { TaskForm } from './form.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;
  ngOnInit(): void { }
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
  public valuesArras = new Array();
  public title: string = "";
  public description: string = "";
  public deadline: Date;
  public value: number;
  public visible: boolean;
  public isEmpty: boolean;
  public errorMessage: string = "Please fill all the fields";
  public isClosed: boolean = false;

  public getInputsValue(event: any): void {
    if (this.title === "" || this.description === "" || (this.value === null || this.value === undefined) || (this.deadline === null || this.deadline === undefined)) {
      this.isEmpty = true;
      setTimeout(() => {
        this.isEmpty = false;
      }, 2500);
    } else {
      event.preventDefault();
      this.valuesArras.push({
        title: this.title,
        description: this.description,
        deadline: this.deadline,
        value: this.value,
      });
      console.log(this.valuesArras);
      this.visible = true;
      this.title = "";
      this.description = "";
      this.deadline = null;
      this.value = null;
    }
  }
}
