import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-duper-counter',
  templateUrl: './super-duper-counter.component.html',
  styleUrls: ['./super-duper-counter.component.css']
})
export class SuperDuperCounterComponent implements OnInit {
  value : number;
  iterator : number = 1;
  click : boolean = false;

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
