import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { CalculatorComponent } from "./calculator/calculator.component"
import { Addtasktodoapp2Component } from "./addtasktodoapp2/addtasktodoapp2.component"
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component"
import { GithubinfoComponent } from "./githubinfo/githubinfo.component"

const routes: Routes = [
   { path: "calculator", component: CalculatorComponent },
   { path: "todoapp2", component: Addtasktodoapp2Component },
   { path: "signup", component: SignUpFormComponent },
   { path: "gitinfo", component: GithubinfoComponent },
]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
