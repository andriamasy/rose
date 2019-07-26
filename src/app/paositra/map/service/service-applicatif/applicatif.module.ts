import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourrierApplicatifServiceProvider } from './courrier/courrier-applicatif.service.provider';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        ...CourrierApplicatifServiceProvider
    ]
})
export class ApplicatifModule { }
