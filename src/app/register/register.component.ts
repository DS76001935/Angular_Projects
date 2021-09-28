import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../notification.service';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fname:String = ""
  age:number = 0
  email:String = ""
  password:String = ""
  isVisible:boolean = false

  users:Array<any> =[]

  constructor(private userApiService:UserApiService, private notification:NotificationService) {

    console.log("constructor()");
    
    this.fname=""
    this.age=0
    this.email=""
    this.password=""
  }

  ngOnInit(): void {
  }
  retrieve(){

    let userId = parseInt(Math.random()*10000+"");
    let user = {userId:userId,fname:this.fname,age:this.age,email:this.email,password:this.password}
    this.userApiService.users.push(user)

    console.log(userId)
    console.log(this.fname)
    console.log(this.age)
    console.log(this.email)
    console.log(this.password)
    console.log(this.isVisible)
    this.isVisible = true

    this.notification.showSuccess("User has saved.","Success",{timeout:3000});

    console.log("=>",this.userApiService.users)
  }

}
