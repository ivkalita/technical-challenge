import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IsAuthenticatedGuard } from '../core/guards/is-authenticated.guard';
import { NotAuthenticatedGuard } from '../core/guards/not-authenticated.guard';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        canActivate: [IsAuthenticatedGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotAuthenticatedGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NotAuthenticatedGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class UserRoutingModule {

}
