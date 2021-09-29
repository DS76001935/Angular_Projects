import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-view-api',
  templateUrl: './view-api.component.html',
  styleUrls: ['./view-api.component.css']
})
export class ViewApiComponent implements OnInit {

  uId:number=0
  firstName:string=""
  lastName:string=""
  age:number=0
  email:string=""
  password:string=""

  constructor(private activateRoute:ActivatedRoute,private router:Router,private notification:NotificationService,private clientService:ClientService) { }

  ngOnInit(): void {
    this.loadUserprofile()
  }
  loadUserprofile(){
    
    this.clientService.getUserById(this.activateRoute.snapshot.params.userId).subscribe(resp=>{
    console.log(resp);
    console.log("userid=>",resp.data.userId);
    console.log("user first name=>",resp.data.fname);
    console.log("user last name=>",resp.data.lname);
    console.log("user age=>",resp.data.age);
    console.log("user email=>",resp.data.email);
    console.log("user password=>",resp.data.password);
    
    this.uId=resp.data.userId
    this.firstName=resp.data.fname
    this.lastName=resp.data.lname
    this.age=resp.data.age
    this.email=resp.data.email
    this.password=resp.data.password

    this.notification.showSuccess("User Profile has achieved as a whole.","Success",{timeout:3000})
    });
  }

}
