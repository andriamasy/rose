import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../../service/personnel.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Action } from '../../donnee/action';
import { SelectionModel } from '@angular/cdk/collections';
import { PersonnelModel } from '../../model/personnelModel';
import { AjouterPersonnelComponent } from '../../shared/ajouter-personnel/ajouter-personnel.component';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];



@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  //select
  actions: Action[] = [
    { value: false, viewValue: 'Désactiver' },
    { value: true, viewValue: 'Activer' }
  ];
  myControl: FormControl;
  selection = new SelectionModel<PersonnelModel>(true, []);
  personnelResult: PersonnelModel[] = [];
  personnel: PersonnelModel; 

  constructor(
    private personnelService: PersonnelService,
    private formBuilder: FormBuilder,
		public 	dialog: MatDialog,
  ) {
    this.myControl = new FormControl();
  }
  options: string[] = ['One', 'Two', 'Three'];

  displayedColumns: string[] = ['select', 'id', 'firtname', 'lastName', 'poste', 'phoneNumber', 'adresse', 'date_hiring', 'actions'];
  dataSource: PersonnelModel;

  ngOnInit() {
    this.getPersonnels();
  }

  getPersonnels() {
    this.personnelService.getPersonnels().subscribe(
      res => {
        this.dataSource = res;
        this.personnelResult = res;
      }
    );
  }

  /** SELECTION */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.personnelResult.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.personnelResult.forEach(row => this.selection.select(row));
    }
  }

  addPersonnel() {
    const dialogRef = this.dialog.open(AjouterPersonnelComponent, {
		  width: '400px',
		  data: this.personnel
		});
	
		dialogRef.afterClosed().subscribe(result => {
      this.getPersonnels();
		  console.log('The dialog was closed');
		  /* this.openSnackBar();
		  this.animal = result; */
		});
  }
}
