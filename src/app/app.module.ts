import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { CalculatorComponent } from "./calculator/calculator.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { HeroesComponent } from "./heroes/heroes.component"
import { HeroDetailComponent } from "./hero-detail/hero-detail.component"
import { Addtasktodoapp2Component } from "./addtasktodoapp2/addtasktodoapp2.component"
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component"
import { LogInFormComponent } from "./log-in-form/log-in-form.component"
import { GithubinfoComponent } from "./githubinfo/githubinfo.component"
import { HttpClientModule } from "@angular/common/http"
import { GithubdataService } from "./githubdata.service"
import { WeatherAppComponent } from "./weather-app/weather-app.component"
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// search module
@NgModule({
   declarations: [
      AppComponent,
      CalculatorComponent,
      NavbarComponent,
      HeroesComponent,
      HeroDetailComponent,
      Addtasktodoapp2Component,
      SignUpFormComponent,
      LogInFormComponent,
      GithubinfoComponent,
      WeatherAppComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      Ng2SearchPipeModule
   ],
   providers: [GithubdataService],
   bootstrap: [AppComponent],
})
export class AppModule {}
