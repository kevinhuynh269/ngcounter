
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../counter/counter.component';
import { SuperCounterComponent } from '../super-counter/super-counter.component';
import { SuperDuperCounterComponent } from '../super-duper-counter/super-duper-counter.component';

import { CounterDetailsComponent } from './counter-details.component';

describe('CounterDetailsComponent', () => {
  let component: CounterDetailsComponent;
  let fixture: ComponentFixture<CounterDetailsComponent>;
  let counter: CounterComponent;
  let superCounter: SuperCounterComponent;
  let superDuperCounter: SuperDuperCounterComponent;

  const normalMessage = "This is a Normal Counter";
  const superMessage = '🔥🔥🔥 SUPER COUNTER !!!! 🔥🔥🔥🔥🔥';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterDetailsComponent ]
    })
    .compileComponents();
  });

  const addCounter = () =>{
    component.counter = counter;
    component.message = normalMessage;
  }

  const addSuperCounter =() => {
    component.counter = superCounter;
    component.message = superMessage;
  }

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDetailsComponent);
    component = fixture.componentInstance;
    counter = new CounterComponent();
    superCounter = new SuperCounterComponent();
    superDuperCounter = new SuperDuperCounterComponent();

    addCounter();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('handles value iteration', () => {
    //handle normal counters
    component.increaseValue();
    component.increaseValue();

    expect(component.getValue()).toEqual(2);

    component.decreaseValue();

    expect(component.getValue()).toEqual(1);

    //handle super counters
    addSuperCounter();
    component.increaseValue();
    component.increaseValue();
    expect(component.getValue()).toEqual(6);

    component.decreaseValue();
    expect(component.getValue()).toEqual(3);
  })

  const isDecreaseDisabled = () => {
    return fixture.nativeElement.querySelector(".decrease").disabled;
  }

  it("button disables when value becomes 0 on normal counter", () => {
    //when value is at 0, button should be disabled
    expect(component.getValue()).toEqual(0);
    expect(isDecreaseDisabled()).toBeTruthy();

    //increase value which enables the button
    component.increaseValue();
    fixture.detectChanges();
    expect(isDecreaseDisabled()).toBeFalsy();

    //handle super counters
    addSuperCounter();
    superCounter.setValue(2);

    fixture.detectChanges();

    expect(isDecreaseDisabled()).toBeTruthy();

    //increase value so button should reenable
    component.increaseValue();

    fixture.detectChanges();

    expect(isDecreaseDisabled()).toBeFalsy();

  })

  it("checks if the message is correct", () => {
    expect(component.message).toEqual(normalMessage)

    addSuperCounter();
    fixture.detectChanges();

    expect(component.message).toEqual(superMessage)
  })

  it("check start button implementation", () => {

    expect(fixture.nativeElement.querySelector("#start")).toBeNull;

    component.counter = superDuperCounter;

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector("#start")).toBeDefined();
  })

  // it("check value of super duper counter", () => {
  //   component.
  // })





});
