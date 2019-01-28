import { Injectable } from '@angular/core';
import { People } from '../assets/data/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private _url: string = "/assets/data/user.json"

  constructor(private http: HttpClient) { }

getUsers(): Observable<People[]>{
return this.http.get<People[]>(this._url);
};

}