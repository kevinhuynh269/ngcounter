import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  let component: AppComponent;
  let fixture : ComponentFixture<AppComponent>;
  
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    fixture.autoDetectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('Check to see if title is equal to angular counter',()=>{
    expect(component.title).toBe("Angular Counter");
  });

  it('See if Lists are initialized to empty',()=>{
    expect(component.counters.length).toEqual(0);
    expect(component.superCounters.length).toEqual(0);
  });

  it('AddCounter Functionality', () => {
    expect(component.counters.length).toEqual(0);
    component.addCounter();
    expect(component.counters.length).toEqual(1);
  });

  it('Create Super Counter', () => {
    expect(component.counters.length).toEqual(0);
    expect(component.superCounters.length).toEqual(0);
    component.addCounter();
    component.addCounter();
    component.addCounter();
    component.addCounter();
    component.addCounter();
    component.addCounter();
    expect(component.counters.length).toEqual(0);
    expect(component.superCounters.length).toEqual(1);
  });

  it('Check value of SuperCounter', () => {
    expect(component.counters.length).toEqual(0);
    expect(component.superCounters.length).toEqual(0);

    //create coumters
    component.addCounter();
    component.addCounter();
    component.addCounter();
    expect(component.counters.length).toEqual(3);

    //increase value of first component
    let component1 = component.counters[0];
    component1.increaseValue();
    component1.increaseValue();
    component1.increaseValue();
    expect(component1.value).toEqual(3);

    //increase value of second component
    let component2 = component.counters[1];
    component2.increaseValue();
    component2.increaseValue();
    component2.increaseValue();
    expect(component2.value).toEqual(3);

    component.addCounter();
    component.addCounter();
    component.addCounter();

    expect(component.superCounters.length).toEqual(1);
    expect(component.superCounters[0].value).toEqual(6)
  });

  it("make sure super duper counters are intialized", () => {
    for (let i = 0; i < 17; i++) {
      component.addCounter();
    }

    //summon the super duper
    component.addCounter();

    let superDuper = component.superDuperCounters[0];

    expect(superDuper.value).toEqual(0);
  })

  it('make sure value of super duper is correct', () => {
    for (let i = 0; i < 17; i++) {
      component.addCounter();
    }

    component.superCounters[0].setValue(200);
    component.superCounters[1].setValue(100);

    component.counters[3].value = 4;
    component.counters[2].value = 6;

    component.addCounter();

    expect(component.superDuperCounters[0].value).toEqual(310);
  })
  
});
