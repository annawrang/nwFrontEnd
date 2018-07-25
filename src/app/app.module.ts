import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import { appRoutes } from './routes';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserService } from './user/shared/user.service';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { NetworksComponent } from './dashboard/networks/networks.component';
import { FeedService } from './dashboard/home/feed.service';
import { PostComponent } from './dashboard/post/post.component';
import { ProfileService } from './dashboard/profile/profile.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    ProfileComponent,
    NetworksComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, AuthGuard, FeedService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
