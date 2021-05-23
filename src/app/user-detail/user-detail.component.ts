import { Component, OnInit} from '@angular/core';
import {Gitsearch2Service } from '../gitsearch2.service';
import {User} from '../user'
import  {RepoDetails} from '../repo-details'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  holdUserDetails! : User;
  repodata :any = [];
  githubservice: any;
  constructor(gitservice:Gitsearch2Service ){
    this.githubservice = gitservice
   }
    displayUserDetail(){
      
    }
  ngOnInit(): void {
    this.repodata =this.githubservice.repoData
    this.holdUserDetails=this.githubservice.user  
  
  }
}
