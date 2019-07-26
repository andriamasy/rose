import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CourrierDepartService } from '../../service/courrier-depart.service';

@Component({
  selector: 'app-dialog-supprimercourrierdepart',
  templateUrl: './dialog-supprimercourrierdepart.component.html',
  styleUrls: ['./dialog-supprimercourrierdepart.component.css']
})
export class DialogSupprimercourrierdepartComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogSupprimercourrierdepartComponent>,
    private courrierDepartservice : CourrierDepartService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    
  }

  onSupprimer() {
    this.courrierDepartservice.supprimerCourrierDepart(this.data).subscribe(
      result => {
        if(result.error === false) {
          this.dialogRef.close();
        }
      }
    );
  }

}
