import { Component, Input, OnInit } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-details',
  templateUrl: './counter-details.component.html',
  styleUrls: ['./counter-details.component.css']
})
export class CounterDetailsComponent implements OnInit {

  public value: number = 0;

  @Input() counter: CounterComponent; 

  constructor() {
    
  }

  incrementValue() {
    this.value += 1;
  }

  ngOnInit(): void {
  }

}
