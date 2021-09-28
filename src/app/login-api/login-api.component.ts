import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-login-api',
  templateUrl: './login-api.component.html',
  styleUrls: ['./login-api.component.css']
})
export class LoginApiComponent implements OnInit {

  email:String=""
  password:String=""

  constructor(private router:Router,private notification:NotificationService, private clientService:ClientService) { }

  ngOnInit(): void {
  }
  authenticate(){
    let user = {email:this.email,password:this.password}
    this.clientService.authenticate(user).subscribe(resp=>{
      if(resp.status==200){
        this.notification.showSuccess(resp.message,"Success",{timeout:3000})
        if(resp.data.roleId == 2){
          this.router.navigateByUrl("/home")
        }else if(resp.data.roleId == 1){
          this.router.navigateByUrl("/admin")
        }
      }else{
        this.notification.showError(resp.message,"Error",{timeout:3000})
      }
    },err=>{
      
    });
  }

}
