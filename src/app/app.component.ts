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
   
  holdDetails! : User;
   
  constructor(gitservice:Gitsearch2Service ){
   this.githubservice = gitservice
  }
   submitUser(){
     this.githubservice.gitUser(this.search)
   }
  

}
