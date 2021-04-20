import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit {
  value : number = 0;
  iterator : number = 1;

  constructor() {

  }

  ngOnInit(): void {
  }

  increaseValue() {
    this.value += this.iterator;
  }

  decreaseValue() {
    this.value -= this.iterator;
  }
}
