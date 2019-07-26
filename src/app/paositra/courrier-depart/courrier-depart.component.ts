import { CourrierService } from './../../service/courrier.service';
import { DialogAjouterCourrierDepartComponent } from './../../shared/dialog-ajouter-courrier-depart/dialog-ajouter-courrier-depart.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CourrierDepartService } from '../../service/courrier-depart.service';
import { CourrierDepartModel } from '../../model/courrierDepart';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog,  MatTableDataSource, MatDatepickerInputEvent } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { DialogSupprimercourrierdepartComponent } from '../../shared/dialog-supprimercourrierdepart/dialog-supprimercourrierdepart.component';

@Component({
  selector: 'app-courrier-depart',
  templateUrl: './courrier-depart.component.html',
  styleUrls: ['./courrier-depart.component.css']
})
export class CourrierDepartComponent implements OnInit {

  displayedColumns: string[] = ['select','name', 'reference', 'cachet', 'dateDepot', 'dateRetrait', 'signature', 'actions'];
  dataSource = new MatTableDataSource <Element>();
  selection = new SelectionModel<CourrierDepartModel>(true, []);
  CourrierDepartResult: CourrierDepartModel[] = [];
  courrier: any; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public array: any;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  events: string[] = [];

  constructor(
    private courrierDepartservice: CourrierDepartService,
    public 	dialog: MatDialog,
    private courrierService: CourrierService
  ) { }

  ngOnInit() {
    this.getAllCourrierDepart();
    this.getListCourrier();
    
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.dataSource = part;
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
          this.array = res.data;
          this.totalSize = this.array.length;
          this.iterator();
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
		  this.getAllCourrierDepart() ;
		});
  }
  
  supprimer(id) {
    const dialogRef = this.dialog.open(DialogSupprimercourrierdepartComponent, {
      width: '400px',
      data: id
		});
		dialogRef.afterClosed().subscribe(result => {
		  this.getAllCourrierDepart() ;
		}); 
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    let data = event.value;
    this.courrierDepartservice.searchBydate(data).subscribe(
        result => {
          console.log(result)
        }
    )
  }

}
