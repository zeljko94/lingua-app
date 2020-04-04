import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SwalService } from 'src/app/services/swal.service';
import { SanitizerService } from 'src/app/services/sanitizer.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-ucenik-tecaj-details',
  templateUrl: './ucenik-tecaj-details.component.html',
  styleUrls: ['./ucenik-tecaj-details.component.scss']
})
export class UcenikTecajDetailsComponent implements OnInit {

  tecaj: any = {};
  id: any;
  isLoaded: boolean = false;

  loggedID: any = 0;

  private sub: any;


  nastavneCjeline: any[] = [];
  novaNastavnaCjelina: any = {};

  obavijesti: any[] = [];
  novaObavijest: any = {};

  termini: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpService,
    private router: Router,
    public auth: AuthService,
    private swal: SwalService,
    private sanitizer: SanitizerService,
  ) { }

  nastavnaCjelinaDelete(id){

  }

  brisiObavijest(id){

  }

  
  ngOnInit() {
    this.loggedID = this.auth.getUser().id;
    //this.swal.showLoading("Učitavanje...", false);
    this.sub = this.activatedRoute.params.subscribe(params => {
     this.id = +params['id'];

     if(this.id){
       this.http.get('tecajevi', this.id)
        .subscribe(data => {
          this.tecaj = data;
          this.isLoaded = true;
        },
        err => {

        });
     }
    });
  }


  subArray(arr, chunkSize){
    var i,j,temparray,chunk = chunkSize;
    var rez = [];
    for (i=0,j=arr.length; i<j; i+=chunk) {
        temparray = arr.slice(i,i+chunk);
        rez.push(temparray);
    }
    return rez;
  }



  asd(){
    alert("asd");
  }

  details(id){
    this.router.navigate(['/user/termin-details/' + id]);
  }


  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
