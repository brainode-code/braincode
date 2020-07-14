import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valuesArras= new Array; 
  title:string = "";
  description:string ="";
  deadline:Date;
  value:number;
  visible: boolean;
  
  public getInputsValue(event: any): void { 
    event.preventDefault();
    this.valuesArras.push({title: this.title, description: this.description, deadline: this.deadline, value: this.value})
    console.log(this.valuesArras);
    this.visible = true;
    this.title = '';
    this.description = '';
    this.deadline = null;
    this.value = null;
  }
}

