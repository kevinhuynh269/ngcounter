import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
// import { SuperCounterComponent } from './super-counter/super-counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Counter';

  counters: CounterComponent[] = [];

  addCounter() {
    if (this.counters.length == 5) {
      let total: number = 0;

      for (const counter of this.counters) {
        total += counter.value;
      }

      this.counters = [];
      this.counters.push(new CounterComponent());
    }

    this.counters.push(new CounterComponent());
  }
  // findLengthOfCounter(){
  //   // if(this.counters.length == 6){
  //   //   this.counters = [];
  //   //   this.superCounters.push(new SuperCounterComponent());
  //   //   return true;
  //   // }
  //   return false;

  // }

  

  // incrementValue(counter: CounterComponent, i: number) {
  //   counter.incrementValue(i)
  // }
}
