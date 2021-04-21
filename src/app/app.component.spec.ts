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
  
});
