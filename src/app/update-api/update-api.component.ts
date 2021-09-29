import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-update-api',
  templateUrl: './update-api.component.html',
  styleUrls: ['./update-api.component.css']
})
export class UpdateApiComponent implements OnInit {

  firstName:String=""
  lastName:String=""
  uAge:number=0
  uId:number=0

  user:any={}

  constructor(private activateRoute:ActivatedRoute,private router:Router,private notification:NotificationService,private clientService:ClientService) { }

  ngOnInit(): void {
    this.clientService.getUserById(this.activateRoute.snapshot.params.userId).subscribe(resp=>{
      console.log("response => ",resp)
      this.user=resp
      console.log("user array => ",this.user);
      this.uId=this.user.data.userId;
      this.firstName=this.user.data.fname;
      this.lastName=this.user.data.lname;
      this.uAge=this.user.data.age;
      console.log("id from user array => ",this.user.data.userId);
      console.log("fname from user array => ",this.user.data.fname);
      console.log("lname from user array => ",this.user.data.lname);
      console.log("age from user array => ",this.user.data.age);
      
    console.log("uId=",this.uId," - firstName=",this.firstName," - lastName=",this.lastName," - uAge=",this.uAge)
    });
  }
  

  update(){
    console.log("update button clicked.");
    
    this.user={userId:this.uId,fname:this.firstName,lname:this.lastName,age:this.uAge}
    this.clientService.editUser(this.user).subscribe(resp=>{

      console.log(resp);
      this.notification.showSuccess("the user has updated.","Success",{timeout:3000})
      this.resetForm()
      this.router.navigateByUrl("/home")

    },error=>{
      this.notification.showError("Something went wrong!!!","Error",{timeout:3000})
    });

  }
  resetForm(){
    this.firstName=""
    this.lastName=""
    this.uAge=0
  }

}
