import { CourrierService } from './../../service/courrier.service';
import { DialogAjouterCourrierDepartComponent } from './../../shared/dialog-ajouter-courrier-depart/dialog-ajouter-courrier-depart.component';
import { Component, OnInit } from '@angular/core';
import { CourrierDepartService } from '../../service/courrier-depart.service';
import { CourrierDepartModel } from '../../model/courrierDepart';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-courrier-depart',
  templateUrl: './courrier-depart.component.html',
  styleUrls: ['./courrier-depart.component.css']
})
export class CourrierDepartComponent implements OnInit {

  displayedColumns: string[] = ['select','name', 'reference', 'cachet', 'dateDepot', 'dateRetrait', 'signature', 'actions'];
  dataSource: CourrierDepartModel;
  selection = new SelectionModel<CourrierDepartModel>(true, []);
  CourrierDepartResult: CourrierDepartModel[] = [];
  courrier: any; 

  constructor(
    private courrierDepartservice: CourrierDepartService,
    public 	dialog: MatDialog,
    private courrierService: CourrierService
  ) { }

  ngOnInit() {
    this.getAllCourrierDepart();
    this.getListCourrier();
  }

  getListCourrier() {
    this.courrierService.getListe().subscribe(
			res => {
				this.courrier = res;
			}
		);
  }

  getAllCourrierDepart() {
    this.courrierDepartservice.getCourrierDepart().subscribe(
      res => {
          console.log(res.data)
          this.dataSource = res.data;
          this.CourrierDepartResult = res.data;
      }
    );
  }

  /** SELECTION */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.CourrierDepartResult.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.CourrierDepartResult.forEach(row => this.selection.select(row));
    }
  }

  openDialog(): void {
		const dialogRef = this.dialog.open(DialogAjouterCourrierDepartComponent, {
      width: '400px',
      data: this.courrier.data
		});
	
		dialogRef.afterClosed().subscribe(result => {
		  console.log('The dialog was closed');
		});
	}

}
