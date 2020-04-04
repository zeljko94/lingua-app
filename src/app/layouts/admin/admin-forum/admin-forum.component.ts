import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SwalService } from 'src/app/services/swal.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-forum',
  templateUrl: './admin-forum.component.html',
  styleUrls: ['./admin-forum.component.scss']
})
export class AdminForumComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService,
    //private notificationService: NotificationService,
    private swal: SwalService,
    private http: HttpService
  ) { }

  forumi: any[] = [];
  mode: any = '';
  object: any = {};

  ngOnInit() {
    this.swal.showLoading("Učitavanje...", false);
    this.http.getAll('forumi')
      .subscribe(
        data => {
        this.swal.hideLoading();
        this.forumi = data;
      },
      err => {
        this.swal.hideLoading();
        console.log(err);
      });
  }

  details(id){
    this.router.navigate(['/admin/forum-details/' + id]);
  }

  brisi(id){
    this.swal.confirmDelete(
      () => {
        /*
        this.notificationService.notifyForumDelete(id, this.auth.getID())
        .subscribe(data => {});
        */  
        this.http.delete('forumi', id)
          .subscribe(
            data => {
              this.forumi = this.forumi.filter(f => f.id != id);
              this.swal.ok("Uspješno obrisano!");
            },
            err => {
              this.swal.err("Greška prilikom brisanja!");
          });
          
      },
      () => {}
    );
  }

  dodaj(){
    this.router.navigate(['/admin/add-forum']);
  }

}
