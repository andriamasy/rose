import { Routes, CanActivate } from "@angular/router";
import { PersonnelComponent } from "./personnel/personnel.component";
import { CourrierArriverComponent } from "./courrier-arriver/courrier-arriver.component";
import { CourrierDepartComponent } from "./courrier-depart/courrier-depart.component";


import { 
  RoleGuardService as RoleGuard 
} from '../service/role-guard.service';
import { ModifierPersonnelComponent } from "./personnel/modifier-personnel/modifier-personnel.component";

export const PaositraRoutes: Routes = [
  {
    path: 'personnel',
    children: [
      {
        path: 'list',
        component: PersonnelComponent,
        canActivate: [RoleGuard],
        data: {
            title: 'Listes personnels',
            expectedRole: 'ADMIN'
        },

      },

      {
        path: 'edit/:id',
        component: ModifierPersonnelComponent,
        data: {
          title: 'Modification personnels',
          expectedRole: 'ADMIN'
      },
      }
    ]
  },

  {
    path: 'courrier-arriver',
    children: [
      {
        path: 'list',
        component: CourrierArriverComponent,
        data: {
          title: 'Listes Courrier Arriver'
        }
      }
    ]
  },

  {
    path: 'courrier-depart',
    children: [
      {
        path: 'list',
        component: CourrierDepartComponent,
        data: {
          title: 'Listes Courrier Départ',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'ngComponent' }, { title: 'Progressbar' }]
        }
      }
    ]
  }
];
