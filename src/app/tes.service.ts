import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TesService {

  private getuserurl = "https://jsonplaceholder.typicode.com/users";


  //stream from database to springboot from sb to angular  => Observable
  
  constructor(private httpclient : HttpClient) { }

  print(){
   // alert('hellow');
  }

  getAllUsers():Observable<User[]>{
    return this.httpclient.get<User[]>(this.getuserurl);
  }

}
