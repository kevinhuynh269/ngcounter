import { Component, OnInit } from '@angular/core';

enum CounterTypes {
  Normal,
  Super
}

let iterators = new Map<number, number>([
  [CounterTypes.Normal, 1],
  [CounterTypes.Super, 3]
]);

@Component({
  selector: 'app-counters',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit {
  value : number = 0;
  type : CounterTypes = CounterTypes.Normal;
  iterator : number = iterators.get(this.type);

  constructor() {
    
  }

  ngOnInit(i: number = 0): void {
    this.value = i;
  }

  changeValue(increase: boolean = true) {
    increase ? this.value += this.iterator : this.value -= this.iterator;
  }

}
