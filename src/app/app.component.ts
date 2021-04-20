import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Counter';
  value : number = 0;

  incrementValue(i: number) {
    this.value += i;
  }
}
