import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { NotificationService } from '../notification.service';
import { Users } from '../users';

@Component({
  selector: 'app-home-api',
  templateUrl: './home-api.component.html',
  styleUrls: ['./home-api.component.css']
})
export class HomeApiComponent implements OnInit {

  users:Array<Users> = []

  constructor(private router:Router, private clientService:ClientService, private notification:NotificationService) { }

  ngOnInit(): void {
    this.releaseAllUsers()
  }

  releaseAllUsers(){
    this.clientService.getAllUsers().subscribe(resp=>{
      console.log(resp);
      if(resp.data.length == 0){
        this.notification.showError(resp.message,"Error",{timeout:3000})
      }else{
        this.users = resp.data;
        this.notification.showSuccess(resp.message,"Success",{timeout:3000})
     }
      
    });
  }
  removeUser(userId:number){
    this.clientService.deleteUser(userId).subscribe(resp=>{

      let index = this.users.findIndex(user=> user.userId == userId)
      console.log("Deleted Index Number : ",index);
      
      this.users.splice(index,1)
      this.notification.showSuccess("The user has deleted.","Success",{timeout:3000})
    });
  }

  updateUser(userId:number){
    console.log("Updated id =>",userId);
    this.router.navigateByUrl("/updateUser/"+userId)
  }

  viewUser(userId:number){
    console.log("View Button has clicked.");
      this.router.navigateByUrl("/view/"+userId)
  }

}
