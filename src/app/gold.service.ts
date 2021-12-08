import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoldService {

  constructor(private _http: HttpClient) { }
  createUser(){
    return this._http.get("/users/new");
  }

  updateUserInfo(user_id:any, gold:any, log:any) {
    let data = {
      'gold': gold,
      'log': log
    }
    return this._http.put(`/users/${user_id}`, data);
  }
}
