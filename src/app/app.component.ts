import { Component } from '@angular/core';

import { Quotation } from './models/quotation';
import { QUOTES } from './models/data-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  quotes: Quotation[] = QUOTES;
  quotation: Quotation = {
    author: '', quotation: '', votes: 0
  };

  switchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuotation() {
    this.quotes.unshift(this.quotation);
    this.quotation = { author: '', quotation: '', votes: 0 };
  }

  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
  }
}
