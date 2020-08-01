import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auction-form',
  templateUrl: './auction-form.component.html',
  styleUrls: ['./auction-form.component.scss'],
})
export class AuctionFormComponent implements OnInit {
  @Input() newAuction;
  @Input() isFormVisible;

  @Output() onCloseClick = new EventEmitter();
  @Output() addNewAuction = new EventEmitter();
  sampleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.sampleForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      maxValue: ['', Validators.required],
      finishDate: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {}

  public fireCloseFormEvent(e) {
    this.onCloseClick.emit(e);
  }
  public fireAddNewAuctionEvent(e) {
    this.addNewAuction.emit(e);
  }
  public onSubmit(e, val) {
    if (!val.invalid) {
      this.fireAddNewAuctionEvent(e);
    } else console.log(this.sampleForm);
  }
}
