import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGeneratorComponent } from './counter-generator.component';

describe('CounterGeneratorComponent', () => {
  let component: CounterGeneratorComponent;
  let fixture: ComponentFixture<CounterGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
