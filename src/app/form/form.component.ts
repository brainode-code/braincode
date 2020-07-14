import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  public valuesArras = new Array();
  public title: string = "";
  public description: string = "";
  public deadline: Date;
  public value: number;
  public visible: boolean;
  public isEmpty: boolean;
  public errorMessage: string = "Please fill all the fields";
  public isClosed: boolean = false;

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
    if (this.title === "" || this.description === "" || (this.value === null || this.value === undefined) || (this.deadline === null || this.deadline === undefined)) {
      this.isEmpty = true;
      setTimeout(() => {
        this.isEmpty = false;
      }, 1500);
    } else {
      this.isEmpty = false;
    }
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
    this.tasksCreated.emit(this.valuesArras);
  }

  ngOnInit(): void {}
}
