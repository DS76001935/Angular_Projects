import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient:HttpClient) { }

  addUser(user:Users):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"saveUser",user)
  }
  authenticate(user:any):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"authenticate",user)
  }
  getAllUsers():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"users")
  }
  deleteUser(userId:number):Observable<any>{
    return this.httpClient.delete(environment.apiUrl+"deleteUser/"+userId)
  }
  getUserById(userId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"users/"+userId)
  }
  editUser(user:Users):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"editUser/"+user.userId,user)
  }

}
