import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { CalculatorComponent } from "./calculator/calculator.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { HeroesComponent } from "./heroes/heroes.component"
import { HeroDetailComponent } from "./hero-detail/hero-detail.component"
import { TodoappComponent } from "./todoapp/todoapp.component"
import { Addtasktodoapp2Component } from "./addtasktodoapp2/addtasktodoapp2.component"
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component"
import { LogInFormComponent } from "./log-in-form/log-in-form.component"
import { GithubinfoComponent } from "./githubinfo/githubinfo.component"
import { HttpClientModule } from "@angular/common/http"
import { GithubdataService } from "./githubdata.service"
// import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
@NgModule({
   declarations: [
      AppComponent,
      CalculatorComponent,
      NavbarComponent,
      HeroesComponent,
      HeroDetailComponent,
      TodoappComponent,
      Addtasktodoapp2Component,
      SignUpFormComponent,
      LogInFormComponent,
      GithubinfoComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
   ],
   providers: [GithubdataService],
   bootstrap: [AppComponent],
})
export class AppModule {}
