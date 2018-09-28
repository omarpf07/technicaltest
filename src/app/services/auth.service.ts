import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public verificationLogin = new BehaviorSubject(false);
  public currentUser = new BehaviorSubject(null);
  public user;

  constructor(private router: Router) {
  }

  isConnected() {
    return this.verificationLogin.value;
  }

  getUser() {
    return this.currentUser.value;
  }

  getUserName() {
    const user = this.currentUser.value;
    return user.name;
  }

  logOut() {
    this.currentUser.next({});
    this.verificationLogin.next(false);
    this.router.navigate(['login']);

  }

}
