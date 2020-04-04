import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SwalService } from 'src/app/services/swal.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-predavac-forumi',
  templateUrl: './predavac-forumi.component.html',
  styleUrls: ['./predavac-forumi.component.scss']
})
export class PredavacForumiComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService,
    private swal: SwalService,
    private http: HttpService
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
      },
      err => {
        this.swal.err();
        this.swal.hideLoading();
      });
  }

  details(id){
    this.router.navigate(['/predavac/forum-details/' + id]);
  }

  brisi(id){
    this.swal.confirmDelete(
      () => {
        this.swal.showLoading("Brisanje...");
        this.http.delete('forumi', id)
          .subscribe(data => {
            this.forumi = this.forumi.filter(f  => f.id != id);
            this.swal.hideLoading();
          },
          err => {
            this.swal.hideLoading();
            this.swal.err();
          });
      },
      () => {}
    );
  }

  dodaj(){
    this.router.navigate(['/predavac/add-forum']);
  }

}
