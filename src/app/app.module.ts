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
import { RouterModule } from "@angular/router"

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
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
         { path: "calculator", component: CalculatorComponent },
         { path: "todoapp2", component: Addtasktodoapp2Component },
         { path: "signup", component: SignUpFormComponent },
      ]),
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
