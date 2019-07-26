import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from "@angular/material";
import { MatDividerModule } from "@angular/material";
import { StarterComponent } from './starter.component';
import { MaterialModule } from '../material/material.module';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SnackBarComponent } from '../shared/snack-bar/snack-bar.component';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [{
	path: '',
	data: {
		title: 'Gestion Courrier',
		urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Gestion Courrier' }]
	},
	component: StarterComponent
}];

@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		MatCardModule,
		MatDividerModule,
		MaterialModule,
		NgbModule,
		RouterModule.forChild(routes),
		ChartsModule,
		AgmCoreModule.forRoot({
			// please get your own API key here:
			// https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
			apiKey: 'AIzaSyD5acIhKE5RtVCnNyZn0ucvTrJ5BjizqH8'
		}),

	],

	
	exports: [
		MatCardModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [StarterComponent],
})
export class StarterModule { }