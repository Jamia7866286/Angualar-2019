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
   profileTitle: any
   userProfile: string
   profile_show = false
   myname: any
   mypublic_repos = 0
   myfollowers = 0
   myfollowing = 0
   myhtml_url: any
   loader = true

   submit(id: any, profileRef: any) {
      this.gituser.getData(id).subscribe((data: any) => {
         console.log(data)
         if (id == data.login) {
            this.avatar = data.avatar_url
            this.profileTitle = id
            this.myname = data.name
            this.mypublic_repos = data.public_repos
            this.myfollowers = data.followers
            this.myfollowing = data.following
            this.myhtml_url = data.html_url
            this.profile_show = true
            this.loader = false;
            this.userProfile = ""
            profileRef.focus()
         }
         else {
            alert("Please enter Valid github username...")
         }
      })
   }
}
