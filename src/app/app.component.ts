import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { SuperCounterComponent } from './super-counter/super-counter.component';
import "@angular/compiler";
import { SuperDuperCounterComponent } from './super-duper-counter/super-duper-counter.component';
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from 'node:constants';
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
  superDuperCounters: SuperDuperCounterComponent[] = [];
  
  addCounter() {
    if (this.counters.length == 5) {
      let total = this.counters.reduce((total, obj) => total + obj.value, 0)

      let superComponent = new SuperCounterComponent();
      superComponent.value = total;
      
      this.superCounters.push(superComponent);
      this.counters = [];

      if (this.superCounters.length == 3) {
        let total = this.superCounters.reduce((total, obj) => total + obj.value, 0);

        let superDuper = new SuperDuperCounterComponent();
        superDuper.value = total;

        this.superDuperCounters.push(superDuper);
        this.superCounters = [];
      }
    } else {
      this.counters.push(new CounterComponent());
    }
  }
}
