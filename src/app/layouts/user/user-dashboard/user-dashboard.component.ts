import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  naredniSat: any = {
    datum: new Date()
  };
  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
