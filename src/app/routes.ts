import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { AuthGuard } from './auth/auth.guard';


export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: UserComponent,
        children: [
            { path: 'sign-in', component: SignInComponent }
        ]
    },
    { path: 'login', component: UserComponent,
        children: [
            { path: 'sign-up', component: SignUpComponent }
        ]
    },
    { path: '', redirectTo: 'login/sign-in', pathMatch: 'full' }
];