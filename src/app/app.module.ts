import { LetterBoldPipe } from './dashboard/network/shared/LetterBoldPipe';
import { TruncatePipe } from './dashboard/network/shared/TruncatePipe';
import { ClickOutsideDirective } from './dashboard/network/shared/ClickOutsideDirective';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './routes';
import { UserComponent } from './welcome/user.component';
import { SignInComponent } from './welcomePage/popups/sign-in/sign-in.component';
import { SignUpComponent } from './welcome/sign-up/sign-up.component';
import { UserService } from './welcomePage/popups/sharedServices/user.service';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { FeedService } from './dashboard/home/feed.service';
import { PostComponent } from './dashboard/post/post.component';
import { ProfileService } from './dashboard/profile/profile.service';
import { PostService } from './dashboard/post/post.service';
import { NetworkService} from './dashboard/network/network.service';
import { WelcomeComponent } from './welcomePage/welcome.component';
import { LandingPageComponent } from './welcomePage/landing-page/landing-page.component';
import { TermsConditionsComponent } from './welcomePage/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './welcomePage/privacy-policy/privacy-policy.component';
import { AboutSistersideComponent } from './welcomePage/about-sisterside/about-sisterside.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NetworkComponent } from './dashboard/network/network.component';
import { TagFormComponent } from './dashboard/network/tag-form/tag-form.component';
import { NetworkFormComponent } from './dashboard/network/network-form/network-form.component';
import { LoggedInPrivacyPolicyComponent } from './dashboard/logged-in-privacy-policy/logged-in-privacy-policy.component';
import { LoggedInTermsCondComponent } from './dashboard/logged-in-terms-cond/logged-in-terms-cond.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    ProfileComponent,
    PostComponent,
    WelcomeComponent,
    LandingPageComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    AboutSistersideComponent,
    NetworkComponent,
    TagFormComponent,
    NetworkFormComponent,
    TagFormComponent,
    NetworkFormComponent,
    TruncatePipe,
    ClickOutsideDirective,
    LetterBoldPipe,
    LoggedInPrivacyPolicyComponent,
    LoggedInTermsCondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: [UserService, AuthGuard, FeedService, ProfileService, PostService, NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
