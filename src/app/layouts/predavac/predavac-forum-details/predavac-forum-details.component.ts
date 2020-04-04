import { Component, OnInit } from '@angular/core';
import { SwalService } from 'src/app/services/swal.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-predavac-forum-details',
  templateUrl: './predavac-forum-details.component.html',
  styleUrls: ['./predavac-forum-details.component.scss']
})
export class PredavacForumDetailsComponent implements OnInit {



  forum: any = {};
  id: any;
  isLoaded: boolean = false;
  comment: any = {};
  loggedID: any = 0;
  isAdmin: boolean = false;

  private sub: any;

  constructor(
    private swal: SwalService,
    private activatedRoute: ActivatedRoute,
    public auth: AuthService,
    private http: HttpService
  ) { }

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
            this.swal.hideLoading();
            this.isLoaded = true;
          },
          err => {

          });
      }
    });
  }

  brisiKomentar(id){
    this.swal.confirmDelete(
      () => {
        this.swal.showLoading();
        this.http.delete('forum_posts', id)
          .subscribe(data => {
            this.forum.posts = this.forum.posts.filter(p => p.id != id);
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
    this.comment.forum_id = this.id;
    this.comment.user_id = this.auth.getUser().id;
    this.comment.naziv = "";
    
    this.http.post('forum_posts', this.comment)
      .subscribe(data => {
        this.forum.posts.unshift(data);
        this.comment = {};
      },
      err => {
        this.swal.err();
        console.log(err);
      });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
