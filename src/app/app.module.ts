import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { CounterGeneratorComponent } from './counter-generator/counter-generator.component';
import { CounterComponent } from './counter/counter.component';
// import { SuperCounterComponent } from './super-counter/super-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    // CounterGeneratorComponent,
    CounterComponent,
    // SuperCounterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
