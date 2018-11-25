import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-suggestions',
  templateUrl: './customer-suggestions.component.html',
  styleUrls: ['./customer-suggestions.component.css']
})
export class CustomerSuggestionsComponent implements OnInit {

  customer_name = 'יונה';
  constructor() { }

  ngOnInit() {
  }

}
