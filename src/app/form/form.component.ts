import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valuesArras = new Array;
  title:string = "";
  description:string ="";
  deadline:Date;
  value:number;
  
  getInputsValue(event: any): void { 
    event.preventDefault()
    console.log(this.title);
    console.log(this.description);
    console.log(this.deadline);
    console.log(this.value);
  }
}
