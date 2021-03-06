import { TagFormComponent } from './dashboard/network/tag-form/tag-form.component';
import { NetworkFormComponent } from './dashboard/network/network-form/network-form.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './welcome/user.component';
import { SignInComponent } from './welcomePage/popups/sign-in/sign-in.component';
import { SignUpComponent } from './welcome/sign-up/sign-up.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { NetworkComponent } from './dashboard/network/network.component';
import { PostComment } from './dashboard/post-comment.model';
import { PostComponent } from './dashboard/post/post.component';
import { WelcomeComponent } from './welcomePage/welcome.component';
import { AboutSistersideComponent } from './welcomePage/about-sisterside/about-sisterside.component';
import { LandingPageComponent } from './welcomePage/landing-page/landing-page.component';
import { PrivacyPolicyComponent } from './welcomePage/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './welcomePage/terms-conditions/terms-conditions.component';
import { LoggedInPrivacyPolicyComponent } from './dashboard/logged-in-privacy-policy/logged-in-privacy-policy.component';
import { LoggedInTermsCondComponent } from './dashboard/logged-in-terms-cond/logged-in-terms-cond.component';


export const appRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
        children: 
        [{ path: 'home', component: HomeComponent },
        { path: 'privacypolicy', component: LoggedInPrivacyPolicyComponent },
        { path: 'terms', component: LoggedInTermsCondComponent },
        { path: 'post/:id', component: PostComponent },
        { path: 'profile/:id', component: ProfileComponent },
        { path: 'networks', component: NetworkComponent },
        { path: 'networks/form', component: NetworkFormComponent },
        { path: 'networks/form/tags', component: TagFormComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: '**', redirectTo: 'home', pathMatch: 'full' }]
    },



    {
        path: 'welcome', component: WelcomeComponent,
        children: [
            { path: 'home', component: LandingPageComponent },
            { path: 'about', component: AboutSistersideComponent },
            { path: 'terms', component: TermsConditionsComponent },
            { path: 'privacy', component: PrivacyPolicyComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: 'welcome' },



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
];