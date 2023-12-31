import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';
import { User } from "../shared/dto/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`http://localhost:8081/users`);
  }

  getUserInfo(username: string): Observable<User> {
    return this.http.get<User>(`http://localhost:8081/users/${username}`).pipe();
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8081/users/${id}`);
  }

  changeBalance(username: string, newBalance: number): Observable<any> {
    return this.http.patch<any>(`http://localhost:8081/users/${username}?balance=${newBalance}`, {}).pipe(
      tap((res) => console.log(res)),
    )
  }
}
