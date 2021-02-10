import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Quotation } from './../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() newQuotation = new EventEmitter<Quotation>();
  showForm = false;
  quotation: Quotation = {
    author: '', quotation: '', votes: 0
  };

  switchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuotation() {
    this.newQuotation.emit(this.quotation);
    this.quotation = { author: '', quotation: '', votes: 0 };
  }
}
