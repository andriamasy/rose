import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { 
    AuthGuardService as AuthGuard 
 } from '../app/service/auth-guard.service';
 

export const Approutes: Routes = [
    {
        path: '',
        component: FullComponent,
        children: [
            { 
                path: '', 
                redirectTo: '/home',
                pathMatch: 'full' },
            {   
                path: 'home', 
                canActivate: [AuthGuard],
                loadChildren: './starter/starter.module#StarterModule'
            },
            { path: 'component', loadChildren: './component/component.module#ComponentsModule' },

            {
                canActivate: [AuthGuard],
                path: 'paositra', 
                loadChildren: './paositra/paositra.module#PaositraModule' 
            },
            
        ]
    },
    { path: '', loadChildren: './authentification/auth.module#AuthModule'},
    {
        path: '**',
        redirectTo: '/home'
    }
    
];


