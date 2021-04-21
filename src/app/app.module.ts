import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { CounterGeneratorComponent } from './counter-generator/counter-generator.component';
import { CounterComponent } from './counter/counter.component';
import { SuperCounterComponent } from './super-counter/super-counter.component';
import { CounterDetailsComponent } from './counter-details/counter-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SuperCounterComponent } from './super-counter/super-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    // CounterGeneratorComponent,
    CounterComponent,
    SuperCounterComponent,
    CounterDetailsComponent,
    // SuperCounterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
