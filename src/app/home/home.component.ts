import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private notification:NotificationService, private userapi:UserApiService) { }
  users:Array<any> = []
  ngOnInit(): void {
    this.users = this.userapi.users;
  }
  logout(){
    this.router.navigateByUrl("/login")
    this.notification.showSuccess("User has logged out.","Success",{timeout:3000})
  }
  delete(userId:number){
    console.log("Delete button clicked!"+userId);
    let index= -1;

    for(let i=0;i<this.userapi.users.length;i++){
      if(this.userapi.users[i].userId==userId){
        index = i;
        break
      }
    }
    this.userapi.users.splice(index,1)
    this.notification.showSuccess("User has deleted.","Success",{timeout:3000})
  }
  edit(userId:number){
    console.log("edit button clicked!"+userId);
    this.router.navigateByUrl("/editUser/"+userId)
  }
  
}
