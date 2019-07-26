import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSupprimercourrierdepartComponent } from './dialog-supprimercourrierdepart.component';

describe('DialogSupprimercourrierdepartComponent', () => {
  let component: DialogSupprimercourrierdepartComponent;
  let fixture: ComponentFixture<DialogSupprimercourrierdepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSupprimercourrierdepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSupprimercourrierdepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
