import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

// interface CounterTypes {
//   iterator: number,
// }

// enum CounterTypes {
//   Normal,
//   Super
// }


// let iterators = new Map<number, number>([
//   [CounterTypes.Normal, 1],
//   [CounterTypes.Super, 3]
// ]);

export class CounterComponent implements OnInit {
  value : number = 0;
  // type : CounterTypes = CounterTypes.Normal;
  // iterator : number = iterators.get(this.type);

  iterator : number = 1;

  constructor() {

  }

  ngOnInit(): void {
  }

  changeValue(increase: boolean = true) {
    increase ? this.value += this.iterator : this.value -= this.iterator;
  }

}
