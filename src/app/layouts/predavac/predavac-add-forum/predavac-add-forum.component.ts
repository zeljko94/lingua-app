import { Component, OnInit } from '@angular/core';
import { SwalService } from 'src/app/services/swal.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { DualListComponent } from 'angular-dual-listbox';

@Component({
  selector: 'app-predavac-add-forum',
  templateUrl: './predavac-add-forum.component.html',
  styleUrls: ['./predavac-add-forum.component.scss']
})
export class PredavacAddForumComponent implements OnInit {
  
  source:any[] = [];
  destination:any[] = [];

  forum: any = {
    SudioniciID: []
  };

  constructor(private swal: SwalService,
              private router: Router,
              public auth: AuthService,
              private http: HttpService) { }

  ngOnInit() {
    this.http.getAll('users/ucenici')
      .subscribe(data => {
        this.source = data;

        this.http.getAll('users/predavaci')
          .subscribe(data => {
            data = data.filter(d => d.id != this.auth.getUser().id);
          },
          err => {

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

  
  format = { add: 'Dodaj', remove: 'Ukloni', all: 'Označi sve', none: 'Odznači sve',
             direction: DualListComponent.LTR, draggable: true, locale: 'en' };


  dualListDisplay(o){
    return o.email;
  }
              
  destinationChange(ev){
    this.forum.sudionici = ev.map(e => e.id);
  }

  spremi(){
    if(this.validate()){
      this.forum.kreatorID = this.auth.getUser().id;
      this.forum.sudionici.push(this.auth.getUser().id);
      this.forum.sudionici = this.forum.sudionici.toString();

      var obj = JSON.parse(JSON.stringify(this.forum));

      this.http.post('forumi', this.forum)
        .subscribe(data => {
          this.swal.hideLoading();
          this.swal.ok("Forum uspješno kreiran!");
          this.router.navigate(['/predavac/forum']);
        },
        err => {
          this.swal.hideLoading();
          this.swal.err();
        });
    }
  }

}
