import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnelComponent } from './personnel/personnel.component';
import { RouterModule } from '@angular/router';
import { PaositraRoutes } from './paositra.routing';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourrierArriverComponent } from './courrier-arriver/courrier-arriver.component';
import { CourrierDepartComponent } from './courrier-depart/courrier-depart.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatCardModule } from '@angular/material';
import { ModifierPersonnelComponent } from './personnel/modifier-personnel/modifier-personnel.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forRoot(),
    RouterModule.forChild(PaositraRoutes),
    MatCardModule
  ],

  exports: [
		MatCardModule,
		MaterialModule,
		FormsModule,
    ReactiveFormsModule,
    RouterModule
	],

  declarations: [PersonnelComponent, CourrierArriverComponent, CourrierDepartComponent, ModifierPersonnelComponent]
})
export class PaositraModule { }
