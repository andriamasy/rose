import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../../../service/personnel.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { PersonnelModel } from '../../../model/personnelModel';



@Component({
  selector: 'app-modifier-personnel',
  templateUrl: './modifier-personnel.component.html',
  styleUrls: ['./modifier-personnel.component.css']
})
export class ModifierPersonnelComponent implements OnInit {

  personnel: PersonnelModel;
  createForm: FormGroup;

  roles = [
    { id: 0, name: 'Role User', value:'ROLE_USER' },
    { id: 1, name: 'Role Admin', value:'ROLE_ADMIN' },
    { id: 2, name: 'Role super Admin', value: 'ROLE_SUPER_ADMIN' },
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PersonnelService,
    private formBuilder: FormBuilder,
  ) {
    
   }

  ngOnInit() {
    this.getDetatil();
    this.createForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastName: ['', Validators.required],
      adresse: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      poste: ['', Validators.required],
      email: ['', Validators.required],
      dateCreation: [new Date()],
      dateEmbauche: [''],
      roles : new FormArray([])
    });

    
  }

  getDetatil() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getDetail(id).subscribe(
      res => {
        if(res) {
          this.getForm(res.data)
          this.addCheckboxes(res.data.role);
        }
      }
    );

    
  }

  getForm(data) {
    this.createForm = this.formBuilder.group({
      firstname: [data.username, Validators.required],
      lastName: [data.lastname, Validators.required],
      adresse: ['', Validators.required],
      phoneNumber: [data.telephone, Validators.required],
      poste: [data.fonction, Validators.required],
      email: [data.email, Validators.required],
      dateEmbauche: [data.dateEmbauche],
      roles: new FormArray([])
    });
  }

  private addCheckboxes(role) {
    
      this.roles.map((o, i) => {
      for (let val of role) {
        if(val === o.value) {
          const control = new FormControl(i === o.id);
          (this.createForm.controls.roles as FormArray).push(control);
        } else {
          const control = new FormControl(i === 0);
          (this.createForm.controls.roles as FormArray).push(control);
        }
      }
      
    });
  }

}
