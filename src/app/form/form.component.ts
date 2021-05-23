import { Component, OnInit } from '@angular/core';
 import {Gitsearch2Service } from '../gitsearch2.service';
import {User} from '../user';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  githubservice:any;

  search:string="";
   
  
  constructor(gitservice:Gitsearch2Service ){
    this.githubservice = gitservice
   }

  submitUser(){
    this.githubservice.getName(this.search)
    console.log(this.search)
  }
  

  ngOnInit(): void {
  }

}
