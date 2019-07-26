import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierArriverComponent } from './courrier-arriver.component';

describe('CourrierArriverComponent', () => {
  let component: CourrierArriverComponent;
  let fixture: ComponentFixture<CourrierArriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourrierArriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierArriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
