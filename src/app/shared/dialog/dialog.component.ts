import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourrierModel } from '../../model/courrierModel';
import { CourrierService } from '../../service/courrier.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  createForm: FormGroup;
  expediteurs: any;
  submitted = false;
  courrier : CourrierModel;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private formBuilder: FormBuilder,
    private courrierService: CourrierService,
    @Inject(MAT_DIALOG_DATA) public data: CourrierModel
    
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      objet: ['', Validators.required],
      destinateur: ['', Validators.required],
      expediteur: ['', Validators.required]
    });

    this.expediteurs = this.data;
  }

  get f() { return this.createForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.createForm.invalid) {
        return;
      }
      let data = this.createForm.value;
      this.courrierService.ajoutCourrier(data).subscribe(
          res => {
            this.dialogRef.close();
          }
      );
  }

  fermer() {
    this.dialogRef.close();
  }
 
}


