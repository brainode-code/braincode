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
  auctionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.auctionForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      maxValue: ['', Validators.required],
      finishDate: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {}

  public fireCloseFormEvent(e): void {
    this.onCloseClick.emit(e);
  }
  public fireAddNewAuctionEvent(e): void {
    this.addNewAuction.emit(e);
  }
  public onSubmit(auctionData: FormGroup): void {
    if (!auctionData.invalid) {
      this.fireAddNewAuctionEvent(auctionData.value);
    } else console.log(this.auctionForm);
  }
}
