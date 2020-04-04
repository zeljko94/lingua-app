import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-ucenik-tecajevi',
  templateUrl: './ucenik-tecajevi.component.html',
  styleUrls: ['./ucenik-tecajevi.component.scss']
})
export class UcenikTecajeviComponent implements OnInit {

  search = '';

 
  tecajevi: any[] = [];

  constructor(
    private http: HttpService,
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.http.getAll('tecajevi')
      .subscribe(data => {
        this.tecajevi = data;
      },
      err => {

      });
  }

  detalji(id){
    this.router.navigate(['/user/tecaj-details/' + id]);
  }

  applyFilters(){
    
  }
}
