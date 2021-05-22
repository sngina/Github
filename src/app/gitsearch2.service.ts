import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from '../environments/environment';
import { User} from './user';
import  {RepoDetails} from './repo-details';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { stringify } from '@angular/compiler/src/util';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { rejects } from 'assert';

//user details
//repos

@Injectable({
  providedIn: 'root'
})
export class Gitsearch2Service {
  //blueprint at classes
  user!:User;
  repo!:RepoDetails;


  constructor(private http:HttpClient) {
    this.user = new User("","","","");  // from user
    this.repo = new RepoDetails("","",new Date()); // from the repos

   }
   getName(user:string){
     interface ApiResponse{
       longin:string,
       avatar_url:string,
       repos_url:string,
       name:string,

     }
     let promise = new Promise((resolve,reject) =>{
      this.http.get<ApiResponse>('https://api.github.com/users/ + user' + '?access_token='+environment.apikey).toPromise().then(response =>{
       this.user.login = response.longin,
       this.user.avatar_url = response.avatar_url,
       this.user.repos_url =response.repos_url,
       this.user.name = response.name,

       resolve("it's a Success")
      }),(error:any)=>{
        rejects(error);
      }
     })
     
   }
}
