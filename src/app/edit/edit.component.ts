import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private activateroute:ActivatedRoute,private router:Router,private userapi:UserApiService,private notification:NotificationService) { }

  userId:number=-1
  firstName:String = ""
  user:any

  ngOnInit(): void {
    this.userId = this.activateroute.snapshot.params.userId
    console.log("EDIT USER => "+this.userId)
    this.user = this.userapi.users.find(user=> user.userId = this.userId)
    console.log(this.user)

    this.firstName = this.user.fname
  }

  updateUser(){
    this.user.fname=this.firstName
    this.notification.showSuccess("User has updated.","Success",{timeout:3000})
    this.router.navigateByUrl("/home")
  }

}
