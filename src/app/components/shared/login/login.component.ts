import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = 'predavac1@gmail.com';
  password = 'asd123';
  isEmailTaken = false;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.tryLogin(this.email, this.password);
  }

  forgotPass() {

  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.login();
    }
  }

}
