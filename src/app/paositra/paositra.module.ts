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
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { PlacePredictionServiceProvider } from './map/place-prediction.service.provider';
import { CourrierApplicatifServiceProvider } from './map/service/service-applicatif/courrier/courrier-applicatif.service.provider';
import { CatchErrorService } from '../contrainte/error/errorHandler';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forRoot(),
    RouterModule.forChild(PaositraRoutes),
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqa-okwnMlRuBZtnjBv817YPbXEGwRws8',
      libraries: ['places']
    })
  ],

  exports: [
    MatCardModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MapComponent
  ],
  providers: [
    // PlacePredictionServiceProvider,
    // CourrierApplicatifServiceProvider,
    // CatchErrorService
  ],

  declarations: [PersonnelComponent, CourrierArriverComponent, CourrierDepartComponent, ModifierPersonnelComponent, MapComponent]
})
export class PaositraModule { }
