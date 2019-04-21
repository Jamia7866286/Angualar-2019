import { Component, OnInit, OnDestroy, Renderer2 } from "@angular/core"
import { Renderer3 } from "@angular/core/src/render3/interfaces/renderer"
import { GithubdataService } from "../githubdata.service"
@Component({
   selector: "app-githubinfo",
   templateUrl: "./githubinfo.component.html",
   styleUrls: ["./githubinfo.component.less"],
})
export class GithubinfoComponent implements OnInit, OnDestroy {
   constructor(private _render: Renderer2, private gituser: GithubdataService) {}
   data
   users: any

   ngOnInit() {
      //network request;
      //data r
      this.data = "this si s"
   }

   select() {
      this.gituser.getData().subscribe(data => {
        for( let i =0; i < Object.keys(data).length; i++)
{
  this.users = data[i].avatar_url;
  console.log(this.users)
}        
      })
   }
   ngOnDestroy() {
      //free data
      this.data = ""
      let a = 23
      var b = 34
   }
}
