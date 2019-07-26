import { Component, OnInit } from '@angular/core';
import { CourrierArriverModel } from '../../model/courrierArriver';
import { SelectionModel } from '@angular/cdk/collections';
import { CourrierArriveService } from '../../service/courrier-arrive.service';
import { MatDialog } from '@angular/material';
import { CourrierService } from '../../service/courrier.service';

@Component({
  selector: 'app-courrier-arriver',
  templateUrl: './courrier-arriver.component.html',
  styleUrls: ['./courrier-arriver.component.css']
})
export class CourrierArriverComponent implements OnInit {

  displayedColumns: string[] = ['select','codecourrier', 'nom', 'destinateur', 'nomExpediteur', 'adressexpediteur', 'datedepot', 'actions'];
  dataSource: CourrierArriverModel;
  selection = new SelectionModel<CourrierArriverModel>(true, []);
  CourrierArriverResult: CourrierArriverModel[] = [];
  courrier: any; 
  constructor(
    private courrierArriveservice: CourrierArriveService,
    public 	dialog: MatDialog,
    private courrierService: CourrierService
  ) { }

  ngOnInit() {
    this.getAllcourrierDepart()
  }

  getAllcourrierDepart() {
    this.courrierArriveservice.getCourrierArriver().subscribe(
      result => {
        this.dataSource = result.data;
        this.CourrierArriverResult = result.data;
        console.log(this.CourrierArriverResult)
      }
    );
  }

   /** SELECTION */
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.CourrierArriverResult.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.CourrierArriverResult.forEach(row => this.selection.select(row));
    }
  }



}
