import { Component, OnInit, OnDestroy } from '@angular/core';
import { SwalService } from 'src/app/services/swal.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SanitizerService } from 'src/app/services/sanitizer.service';
import { DualListComponent } from 'angular-dual-listbox';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-forum-details',
  templateUrl: './admin-forum-details.component.html',
  styleUrls: ['./admin-forum-details.component.scss']
})
export class AdminForumDetailsComponent implements OnInit, OnDestroy {

  source:any[] = [];
  destination:any[] = [];

  forum: any = {
  };

  id: any;
  isLoaded: boolean = false;
  comment: any = {};
  loggedID: any = 0;
  isAdmin: boolean = false;

  private sub: any;

  constructor(
    private swal: SwalService,
    //private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    public auth: AuthService,
    private sanitizer: SanitizerService,
    private http: HttpService
  ) { }
  
  format = { add: 'Dodaj', remove: 'Ukloni', all: 'Označi sve', none: 'Poništi',
  direction: DualListComponent.LTR, draggable: true, locale: 'en' };


dualListDisplay(o){
return o.name + " " + o.lastname  + " - " + o.email;
}
   
destinationChange(ev){
  this.forum.sudionici = ev.map(e => e.id);
}

save(){
  var o = JSON.parse(JSON.stringify(this.forum));
  o.sudionici = this.forum.sudionici.toString();
  console.log(o);
  this.swal.showLoading("Spremanje izmjena...");
  this.http.patch('forumi', o, o.id)
    .subscribe(
    data => {
      this.forum = data;
      this.swal.hideLoading();
      this.swal.ok("Uspješno spremljene izmjene!");
    },
    err => {
      console.log(err);
      this.swal.err("Greška prilikom spremanja izmjena!");
    });
}


  ngOnInit() {
    this.loggedID = this.auth.getUser().id;
    this.isAdmin = this.auth.isAdmin();
    this.swal.showLoading("Učitavanje...", false);
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if(this.id){
        this.http.get('forumi', this.id)
          .subscribe(data => {
            this.forum = data;
            this.source = data.sudionici;
            this.destination = data.sudionici;

            this.http.getAll('users').
              subscribe( 
                data => { 
                  this.source = data.filter(u => u.id != this.loggedID);
                  this.swal.hideLoading();
                  this.isLoaded = true;
                 },
                err => {

                });
            /*
            this.sanitizer.usrProfileImg(this.forum.Kreator);
            for(var i=0; i<this.forum.Posts.length; i++){
              this.sanitizer.usrProfileImg(this.forum.Posts[i].Kreator);
            }
            */
          });
      }
    });
  }

  brisiKomentar(id){
    this.swal.confirmDelete(
      () => {
        /*
        this.notificationService.notifyForumPostDelete(id, this.auth.getID())
          .subscribe(data => {});
          */
         this.swal.showLoading("Brisanje komentara...");
        this.http.delete('forum_posts', id)
          .subscribe(data => {
            this.swal.hideLoading();
            this.forum.posts = this.forum.posts.filter(p => p.id != id);
          },
          err => {
            this.swal.hideLoading();
            this.swal.err("Greška prilikom brisanja komentara!");
          });
      },
      () => {}
    );
  }

  dodaj(){
    this.comment.forum_id = this.id;
    this.comment.user_id = this.auth.getUser().id;
    
    
    this.swal.showLoading("Dodavanje komentara...");
    this.http.post('forum_posts', this.comment)
      .subscribe(data => {
        this.forum.posts.unshift(data);
        this.comment = {};
        this.swal.hideLoading();
      },
      err => {
        this.swal.hideLoading();
      });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
