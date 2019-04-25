import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
@Injectable({
   providedIn: "root",
})
export class GithubdataService {
   constructor(private http: HttpClient) {}

   getData(id) {
      return this.http.get("https://api.github.com/users/" + id)
   }
}
