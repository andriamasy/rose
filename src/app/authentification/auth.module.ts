import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Login/login.component';
import { RouterModule } from '@angular/router';
import { AuthRootComponent } from './auth-root/auth-root.component';
import { AuthRouter } from './auth.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { RegistreComponent } from './registre/registre.component';


export function tokenGetter() {
  return localStorage.getItem('accessToken');
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRouter),
    FormsModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forRoot()
  ],
  declarations: [LoginComponent, AuthRootComponent, RegistreComponent]
})
export class AuthModule { }
