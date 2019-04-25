import { Component, Renderer2 } from "@angular/core"
import { GithubdataService } from "../githubdata.service"
@Component({
   selector: "app-githubinfo",
   templateUrl: "./githubinfo.component.html",
   styleUrls: ["./githubinfo.component.less"],
})
export class GithubinfoComponent {
   constructor(private _render: Renderer2, private gituser: GithubdataService) {}

   // Git hub variables
   avatar: any
   avatar_default = false
   profileTitle = false
   profileUrl: any
   userProfile: string

   select(id: any, profileRef:any) {
      this.gituser.getData(id).subscribe(data => {
         console.log(data)
         if (id === data.login) {
            this.avatar_default = true
            this.avatar = data.avatar_url
            this.profileTitle = id
            this.userProfile = ""
            profileRef.focus()
         }
      })
   }
}
