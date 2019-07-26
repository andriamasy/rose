import { Routes } from "@angular/router";
import { LoginComponent } from './Login/login.component';
import { RegistreComponent } from "./registre/registre.component";

export const AuthRouter: Routes =  [
    {
        path: 'login',
        component: LoginComponent,
    },

    {
        path: 'registre',
        component: RegistreComponent,
    },

    {
        path: 'logout',
        component: LoginComponent,
    },
];