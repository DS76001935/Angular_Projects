import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor() { 
    let u1 = {userId:1,fname:"Demo",age:"20",email:"demo@gmail.com",password:"demo@123"};
    this.users.push(u1)
  }
  
  users:Array<any>= []

}
