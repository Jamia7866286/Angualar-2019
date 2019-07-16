import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Addtasktodoapp2Component } from './addtasktodoapp2/addtasktodoapp2.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { GithubinfoComponent } from './githubinfo/githubinfo.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { CityDetailsComponent } from './city-details/city-details.component';

const routes: Routes = [
   { path: 'todoapp2', component: Addtasktodoapp2Component },
   { path: 'signup', component: SignUpFormComponent },
   { path: 'gitinfo', component: GithubinfoComponent },
   { path: 'weather', component: WeatherAppComponent },
   { path: '', redirectTo: 'citydetails', pathMatch: 'full'},
   { path: 'citydetails', component: CityDetailsComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
