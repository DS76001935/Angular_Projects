import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { NotificationService } from '../notification.service';
import { Users } from '../users';

@Component({
  selector: 'app-save-api',
  templateUrl: './save-api.component.html',
  styleUrls: ['./save-api.component.css']
})
export class SaveApiComponent implements OnInit {

  fname:String=""
  lname:String=""
  age:number=0
  email:String=""
  password:String=""
  
  user:Users={userId:0,fname:"",lname:"",age:0,email:"",password:"",roleId:0,authToken:""};
  constructor(private clientService:ClientService,private notification:NotificationService,private router:Router) { }
  
  ngOnInit(): void {
  }
  
  save(){
    this.user={userId:0,fname:this.fname,lname:this.lname,age:this.age,email:this.email,password:this.password,roleId:0,authToken:""}
    console.log(this.user);
    this.clientService.addUser(this.user).subscribe(resp=>{
      console.log(resp);
      this.notification.showSuccess(resp.message,"Success",{timeout:3000})
      this.router.navigateByUrl("/login")
    });
  }

}
