import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/services/swal.service';
import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ucenik-forum',
  templateUrl: './ucenik-forum.component.html',
  styleUrls: ['./ucenik-forum.component.scss']
})
export class UcenikForumComponent implements OnInit {


  constructor(
    private router: Router,
    private swal: SwalService,
    private http: HttpService,
    public auth: AuthService
  ) { }

  forumi: any[] = [];
  mode: any = '';
  object: any = {};

  ngOnInit() {
    this.swal.showLoading("Učitavanje...", false);
    this.http.getAll('forumi')
      .subscribe(data => {
        this.swal.hideLoading();
        this.forumi = data;
      });
  }

  details(id){
    this.router.navigate(['/user/forum-details/' + id]);
  }

}
