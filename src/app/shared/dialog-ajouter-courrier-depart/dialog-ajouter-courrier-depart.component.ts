import { CourrierModel } from './../../model/courrierModel';
import { CourrierDepartModel } from './../../model/courrierDepart';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDatepickerInputEvent } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourrierService } from '../../service/courrier.service';
import { CourrierDepartService } from '../../service/courrier-depart.service';

@Component({
  selector: 'app-dialog-ajouter-courrier-depart',
  templateUrl: './dialog-ajouter-courrier-depart.component.html',
  styleUrls: ['./dialog-ajouter-courrier-depart.component.css']
})
export class DialogAjouterCourrierDepartComponent implements OnInit {

  createForm: FormGroup;
  submitted = false;
  courrierDepart:CourrierDepartModel;
  courriers: any;
  date : Date;

  constructor(
    public dialogRef: MatDialogRef<DialogAjouterCourrierDepartComponent>,
    private formBuilder: FormBuilder,
    private courrierDepartService:CourrierDepartService, 
    @Inject(MAT_DIALOG_DATA) public data: CourrierDepartModel
  ) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      courriers: ['', Validators.required],
      cachet: ['', Validators.required],
      dateDepot: ['', Validators.required],
      dateRetrait: ['', Validators.required],
      signature: ['', Validators.required],
      reference: ['', Validators.required]
    });
    this.courriers = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = event.value;
    return event.value;
  }

  get f() { return this.createForm.controls; }

  onSubmit() {
      this.submitted = true;
      let data = this.createForm.value;
      this.courrierDepartService.ajoutCourrierDepart(data).subscribe(
          res => {
            if(res.error === false) {
              this.courrierDepartService.setIsProcess(data.courriers).subscribe(
                res => {
                  console.log('ici')
                }
              )
            }
            this.dialogRef.close();
          }
      );
  }

  fermer() {
    this.dialogRef.close();
  }

}
