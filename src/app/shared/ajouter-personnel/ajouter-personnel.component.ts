import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDatepickerInputEvent } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonnelModel } from '../../model/personnelModel';
import { PersonnelService } from '../../service/personnel.service';
import { PersonnelDto } from '../../Factory/PersonnelDto';

@Component({
  selector: 'app-ajouter-personnel',
  templateUrl: './ajouter-personnel.component.html',
  styleUrls: ['./ajouter-personnel.component.css']
})
export class AjouterPersonnelComponent implements OnInit {

  createForm: FormGroup;
  personnels: any;
  submitted = false;
  pesronnelModel : PersonnelModel;
  personnelDto: PersonnelDto
  date : Date;
  constructor(
    public dialogRef: MatDialogRef<AjouterPersonnelComponent>,
    private formBuilder: FormBuilder,
    private personnelService: PersonnelService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastName: ['', Validators.required],
      adresse: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      poste: ['', Validators.required],
      email: ['', Validators.required],
      dateCreation: [new Date()],
      dateEmbauche: [''],
    });

    this.personnels = this.data;
  }

  get f() { return this.createForm.controls; }

  onSubmit() {
      this.submitted = true;
      let data = this.createForm.value;
      data.dateEmbauche = this.date;
      this.personnelService.ajoutPersonnel(data).subscribe(
        res => {
          this.fermer();
        }, 
        error => {
          console.log(error)
        }
      );
  }

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = event.value;
    return event.value;
  }

  fermer() {
    this.dialogRef.close();
  }

}
