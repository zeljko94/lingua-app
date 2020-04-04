import { Component, OnInit } from '@angular/core';
import { SwalService } from 'src/app/services/swal.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SanitizerService } from 'src/app/services/sanitizer.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.scss']
})
export class ForumDetailsComponent implements OnInit {

  

  forum: any = {
    posts: []
  };
  id: any;
  isLoaded: boolean = false;
  comment: any = {};
  loggedID: any = 0;

  private sub: any;

  constructor(
    private swal: SwalService,
    private activatedRoute: ActivatedRoute,
    private http: HttpService,
    public auth: AuthService,
    private sanitizer: SanitizerService
  ) { }

  ngOnInit() {
    this.loggedID = this.auth.getUser().id;
    this.swal.showLoading("Učitavanje...", false);
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if(this.id){
        this.http.get('forumi', this.id)
          .subscribe(data => {
            this.swal.hideLoading();
            this.isLoaded = true;
            this.forum = data;
            
          },
          err => {
            this.swal.hideLoading();
          });
      }
    });
  }

  brisiKomentar(id){
    this.swal.confirmDelete(
      () => {
        this.http.delete('forumi', id)
          .subscribe(data => {
            this.forum.posts = this.forum.posts.filter(fp => fp.id != id);
          },
          err => {

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
        console.log(err);
      });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
