import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {
  value : number;
  iterator : number = 3;

  constructor() {
    this.value = 0;
  }

  ngOnInit(): void {

  }

  setValue(i: number) {
    this.value = i;
  }

  increaseValue() {
    this.value += this.iterator;
  }

  decreaseValue() {
    this.value -= this.iterator;
  }
}
