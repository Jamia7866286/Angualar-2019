import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { CalculatorComponent } from "./calculator/calculator.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { Addtasktodoapp2Component } from "./addtasktodoapp2/addtasktodoapp2.component"
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component"
import { environment } from './../environments/environment';
import { GithubinfoComponent } from "./githubinfo/githubinfo.component"
import { HttpClientModule } from "@angular/common/http"
import { GithubdataService } from "./services/githubdata.service"
import { WeatherAppComponent } from "./weather-app/weather-app.component"
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
// search module
@NgModule({
   declarations: [
      AppComponent,
      CalculatorComponent,
      NavbarComponent,
      Addtasktodoapp2Component,
      SignUpFormComponent,
      GithubinfoComponent,
      WeatherAppComponent,
      LoginComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      DatePickerModule,
      // Ng2SearchPipeModule,
      TypeaheadModule.forRoot(),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule
   ],
   providers: [GithubdataService],
   bootstrap: [AppComponent],
})
export class AppModule {}
