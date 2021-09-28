import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-logout-api',
  templateUrl: './logout-api.component.html',
  styleUrls: ['./logout-api.component.css']
})
export class LogoutApiComponent implements OnInit {

  constructor(private router:Router,private notification:NotificationService) { }

  ngOnInit(): void {
    this.notification.showSuccess("The user has logged out.","Success",{timeout:3000})
    this.router.navigateByUrl("/login")
  }

}
