import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CatchErrorService } from '../../../../contrainte/error/errorHandler';
import { CourrierBusinessDelegateServiceProvider } from './courrier/courrier-business-delegate.service.provider';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [],
    providers: [
        ...CourrierBusinessDelegateServiceProvider,
        CatchErrorService
    ]
})
export class BusinessDelegateModule { }
