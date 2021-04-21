import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../counter/counter.component';
import { SuperCounterComponent } from '../super-counter/super-counter.component';

import { CounterDetailsComponent } from './counter-details.component';

describe('CounterDetailsComponent', () => {
  let component: CounterDetailsComponent;
  let fixture: ComponentFixture<CounterDetailsComponent>;
  let counter: CounterComponent;
  let superCounter: SuperCounterComponent;

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

    addCounter();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('handles value iteration', () => {
    component.increaseValue();
    component.increaseValue();

    expect(component.getValue()).toEqual(2);

    component.decreaseValue();

    expect(component.getValue()).toEqual(1);
  })

  it("button disables when value becomes 0 on normal counter", () => {
    //when value is at 0, button should be disabled
    expect(component.getValue()).toEqual(0);
    expect(fixture.nativeElement.querySelector(".decrease").disabled).toBeTruthy();

    //increase value which enables the button
    component.increaseValue();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector(".decrease").disabled).toBeFalsy();
  })

  it("checks if the message is correct", () => {
    expect(component.message).toEqual(normalMessage)

    addSuperCounter();
    fixture.detectChanges();

    expect(component.message).toEqual(superMessage)
  })



});
