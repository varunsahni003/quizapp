import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterationComponent } from './auth/registeration/registeration.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { 
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full' 
      },
      { 
        path: 'login', 
        component: LoginComponent 
      },
      { 
        path: 'register', 
        component: RegisterationComponent 
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'reviewer',
        loadChildren: './reviewer/reviewer.module#ReviewerModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

