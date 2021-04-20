import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Counter';

  counters: CounterComponent[] = [];

  addCounter() {
    console.log('add counter')
    this.counters.push(new CounterComponent());
  }

  // incrementValue(counter: CounterComponent, i: number) {
  //   counter.incrementValue(i)
  // }
}
