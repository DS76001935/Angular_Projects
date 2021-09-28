import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
     num1:number=0
     num2:number=0
     sum:number =0
  constructor() {
   }
   addNumbers(){
     this.sum = this.num1+this.num2  
     console.log(this.sum)
   }

  ngOnInit(): void {
  }

}
