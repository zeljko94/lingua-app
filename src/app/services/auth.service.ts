import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { SwalService } from './swal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpService,
    private router: Router,
    private swal: SwalService
  ) { }

  getImg(){
    return 'assets/template/images/profile-icon.png';
  }

  tryLogin(email, password) {
    this.swal.showLoading();
     this.http.post('users/login', {email: email, password: password})
      .subscribe(data => {
        this.setUser(data);
        this.openDashboard();
        this.swal.hideLoading();
      },
      err => {
        this.swal.hideLoading();
        this.swal.err("Greška prilikom logiranja!");
      });
  }

  getFullName() {
    let user = this.getUser();
    if(user) {
      return user.name +  ' ' + user.lastname;
    }
  }

  openDashboard() {
    if(this.isAdmin()){
      this.router.navigate(['/admin/dashboard']);
    }
    else if(this.isPredavac()) {
      this.router.navigate(['/predavac/dashboard']);
    }
    else if(this.isUser()){
      this.router.navigate(['/user/dashboard']);
    }
  }

  setUser(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  isLogged() {
    return this.getUser();
  }

  isAdmin() {
    let user = this.getUser();
    if(!user){
      return false;
    }
    return user.role == 'admin';
  }

  isPredavac() {
    let user = this.getUser();
    if(!user){
      return false;
    }
    return user.role == 'predavac';
  }

  isUser() {
    let user = this.getUser();
    if(!user){
      return false;
    }
    return user.role == 'user';
  }

  getPrivileges() {
    let user = this.getUser();
    if(user){
      return user.role;
    }
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  logout() {
    localStorage.setItem('user', null);
    this.router.navigate(['/login']);
  }
}
