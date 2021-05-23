import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from '../environments/environment';
import { User} from './user';
import  {RepoDetails} from './repo-details';


//user details
//repos

@Injectable({
  providedIn: 'root'
})
export class Gitsearch2Service {
  //blueprint at classes
  user!:User;
  repo!:RepoDetails;
  repoData:any = [];
  singleRepoData:any =[];


  constructor(private http:HttpClient) {
    this.user = new User("","","","");  // from user
    this.repo = new RepoDetails("","",new Date()); // from the repos

   }
   //data
   getName(user:string){
    this.user = new User("","","","");
     interface ApiResponse{
       login:string,
       avatar_url:string,
       repos_url:string,
       name:string,

     }
     let promise = new Promise((resolve,reject) =>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+ user).toPromise().then(response => {
        this.user.login = response.login,
       this.user.avatar_url = response.avatar_url,
       this.user.repos_url =response.repos_url,
       this.user.name = response.name,
        // console.log(this.user.login)
       resolve("it's a Success")
      }),(error:any)=>{
        reject(error);
      }
     })
     return promise;
     
   }
   //repos
  getUserRepos(user:string) {
    this.repoData.splice(0 , this.repoData.length)
  let promise = new Promise((resolve,reject) =>{
    this.http.get<any>('https://api.github.com/users/'+ user + '/repos?access_token='+environment.apikey).toPromise().then(response=>{
      for (var i =0; i<response.length;i++){
     this.singleRepoData = new RepoDetails(response[i].name,response[i].html_url,response[i].updated_at)
     this.repoData.push(this.singleRepoData)
      }
      resolve('Success')
    }),(error:any)=>{
      reject(error)
    }

    
  })
  return promise;
  } 
}
