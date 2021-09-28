import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

}
