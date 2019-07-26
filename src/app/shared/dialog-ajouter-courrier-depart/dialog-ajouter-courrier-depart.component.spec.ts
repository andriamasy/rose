import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAjouterCourrierDepartComponent } from './dialog-ajouter-courrier-depart.component';

describe('DialogAjouterCourrierDepartComponent', () => {
  let component: DialogAjouterCourrierDepartComponent;
  let fixture: ComponentFixture<DialogAjouterCourrierDepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAjouterCourrierDepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAjouterCourrierDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
