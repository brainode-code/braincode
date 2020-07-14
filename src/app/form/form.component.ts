import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() tasksCreated = new EventEmitter<any>();

  valuesArras = new Array; 
  title:string = "";
  description:string ="";
  deadline:Date;
  value:number;
  
  public getInputsValue(event: Event): void { 
    event.preventDefault();
    this.valuesArras.push({title: this.title, description: this.description, deadline: this.deadline, value: this.value})
    this.title = '';
    this.description = '';
    this.deadline = null;
    this.value = null;
    this.tasksCreated.emit(this.valuesArras);
  }
}

