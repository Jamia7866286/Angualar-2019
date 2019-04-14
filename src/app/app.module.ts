import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { Addtasktodoapp2Component } from './addtasktodoapp2/addtasktodoapp2.component';
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NavbarComponent,
    HeroesComponent,
    HeroDetailComponent,
    TodoappComponent,
    Addtasktodoapp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
