import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { SuperCounterComponent } from './super-counter/super-counter.component';
// import { SuperCounterComponent } from './super-counter/super-counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Counter';

  counters: CounterComponent[] = [];
  superCounters: SuperCounterComponent[] = [];
  addCounter() {
    console.log(this.counters);
    if (this.counters.length == 5) {
      
      let total = this.counters.reduce((total, obj) => total + obj.value, 0)

      console.log(`total is ${total}`);

      let superComponent = new SuperCounterComponent();

      console.log(total);
      superComponent.value = total;
      
      this.superCounters.push(superComponent);
      this.counters = [];
    } else {
      this.counters.push(new CounterComponent());
    }
  }
}
