import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';
import { RepoDetails } from './repo-details';
import { Form } from '@angular/forms';



//user details
//repos

@Injectable({
  providedIn: 'root'
})
export class Gitsearch2Service {
  //blueprint at classes
  user!: User;
  repo!: RepoDetails;
  repoData: any = [];
  singleRepoData: any = [];


  constructor(private http: HttpClient) {
    this.user = new User("", "", "", "");  // from user
    this.repo = new RepoDetails("Stella", "", new Date()); // from the repos

  }
  //data
  getName(user: string) {
    interface ApiResponse {
      login: string,
      avatar_url: string,
      repos_url: string,
      name: string,

    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + user).toPromise().then(response => {
        this.user.login = response.login,
          this.user.avatar_url = response.avatar_url,
          this.user.repos_url = response.repos_url,
          this.user.name = response.name,
          // console.log(this.user.login)
          resolve(response)
      }), (error: any) => {
        reject(error);
      }

      // this.repoData.splice(0, this.repoData.length)

      this.http.get<any>('https://api.github.com/users/' + user + '/repos').toPromise().then(response => {
        for (var i = 0; i < response.length; i++) {
          this.singleRepoData = new RepoDetails(response[i].name, response[i].html_url, response[i].updated_at)
          this.repoData.push(this.singleRepoData)
        }
        resolve(response)
      }), (error: any) => {
        reject(error)
      }


    })
    
    return promise;
  }
}
