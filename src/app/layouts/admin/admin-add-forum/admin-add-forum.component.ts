import { Component, OnInit } from '@angular/core';
import { SwalService } from 'src/app/services/swal.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { DualListComponent } from 'angular-dual-listbox';

@Component({
  selector: 'app-admin-add-forum',
  templateUrl: './admin-add-forum.component.html',
  styleUrls: ['./admin-add-forum.component.scss']
})
export class AdminAddForumComponent implements OnInit {
  
  source:     any[] =  [];
  destination:any[] = [];

  forum: any = {
    sudionici: []
  };

  constructor(private swal: SwalService,
              //private notificationService: NotificationService,
              private router: Router,
              private http: HttpService,
              private auth: AuthService) { }

  ngOnInit() {
    this.http.getAll('users/ucenici')
      .subscribe(data => {
        this.source = data;

        this.http.getAll('users/predavaci')
          .subscribe(data => {
            for(var i=0; i<data.length; i++){
              this.source.push(data[i]);
            }
          });
      });
  }

  validate(){
    if(this.forum.naziv){

      return true;
    }
    else{
      this.swal.err("Unesite naziv foruma!");
      return false;
    }
  }

  
  format = { add: 'Dodaj', remove: 'Ukloni', all: 'Označi sve', none: 'Poništi',
             direction: DualListComponent.LTR, draggable: true, locale: 'en' };


  dualListDisplay(o){
    return o.name + " " + o.lastname  + " - " + o.email;
  }
              
  destinationChange(ev){
    this.forum.sudionici = ev.map(e => e.id);
  }

  spremi(){
    if(this.validate()){
      let userID = this.auth.getUser().id;
      this.forum.kreatorID = userID;
      this.forum.sudionici.push(userID);
      this.forum.sudionici = this.forum.sudionici.toString();

      var obj = JSON.parse(JSON.stringify(this.forum));
      this.swal.showLoading();
      this.http.post('forumi', this.forum)
        .subscribe(
          data => {
            console.log(data);
            this.swal.hideLoading();
            this.router.navigate(['/admin/forum']);
          },
          err => {
            console.log(err);
            this.swal.hideLoading();
        });
    }
  }

  getJSON(){
    return JSON.stringify(this.forum);
  }

}
