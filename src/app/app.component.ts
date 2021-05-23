import { Component } from '@angular/core';
import { from } from 'rxjs';
import {Gitsearch2Service } from './gitsearch2.service';
import {User} from './user'
import  {RepoDetails} from './repo-details'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github';
  githubservice:any;

  search!:string;
   
  holdUserDetails! : User;
   
  constructor(gitservice:Gitsearch2Service ){
   this.githubservice = gitservice
  }
   submitUser(){
     this.githubservice.getName(this.search)
     
   }
   displayUserDetail(){
     this.githubservice.getName(this.search)
     this.holdUserDetails = this.githubservice.user;
    //  console.log(this.githubservice.user.login )
   }
  

}
