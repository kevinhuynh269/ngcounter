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

  it('Add Counter Functionality',()=>{
    
  });
  
});
