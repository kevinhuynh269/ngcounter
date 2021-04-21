import { Component, Input, OnInit } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { SuperCounterComponent } from '../super-counter/super-counter.component';
import { SuperDuperCounterComponent } from '../super-duper-counter/super-duper-counter.component';

import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-counter-details',
  templateUrl: './counter-details.component.html',
  styleUrls: ['./counter-details.component.css']
})
export class CounterDetailsComponent implements OnInit {
  @Input() counter: CounterComponent | SuperCounterComponent | SuperDuperCounterComponent; 
  @Input('message') message: string;

  constructor() {

  }

  getValue() {
    return this.counter.value;
  }

  increaseValue() {
    this.counter.increaseValue();
  }

  decreaseValue() {
    this.counter.decreaseValue();
  }

  ngOnInit(): void {
  }

}
