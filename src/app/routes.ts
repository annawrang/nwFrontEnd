import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { NetworksComponent } from './dashboard/networks/networks.component';
import { PostComment } from './dashboard/post-comment.model';
import { PostComponent } from './dashboard/post/post.component';


export const appRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'post/:id', component: PostComponent },
            { path: 'profile/:id', component: ProfileComponent },
            { path: 'networks', component: NetworksComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ]
    },
    {
        path: 'login', component: UserComponent,
        children: [
            { path: 'sign-in', component: SignInComponent }
        ]
    },
    {
        path: 'login', component: UserComponent,
        children: [
            { path: 'sign-up', component: SignUpComponent }
        ]
    },
    { path: '', redirectTo: 'login/sign-in', pathMatch: 'full' }
];