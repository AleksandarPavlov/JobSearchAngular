import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainCardsComponent } from './main-cards/main-cards.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { ConnectSectionComponent } from './connect-section/connect-section.component';
import { JobsFieldsComponent } from './jobs-fields/jobs-fields.component';
import { FooterComponent } from './footer/footer.component';
import { JobCardsComponent } from './job-cards/job-cards.component';
import { LatestJobsComponent } from './latest-jobs/latest-jobs.component';
import { CompaniesPageComponent } from './companies-page/companies-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BannerComponent } from './banner/banner.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainCardsComponent,
    TopCategoriesComponent,
    ConnectSectionComponent,
    JobsFieldsComponent,
    FooterComponent,
    JobCardsComponent,
    LatestJobsComponent,
    CompaniesPageComponent,
    LandingPageComponent,
    BannerComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
