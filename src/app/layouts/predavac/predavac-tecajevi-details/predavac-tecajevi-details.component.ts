import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SwalService } from 'src/app/services/swal.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-predavac-tecajevi-details',
  templateUrl: './predavac-tecajevi-details.component.html',
  styleUrls: ['./predavac-tecajevi-details.component.scss']
})
export class PredavacTecajeviDetailsComponent implements OnInit {



  tecaj: any;
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
    private router: Router,
    public auth: AuthService,
    private swal: SwalService,
    private http : HttpService
  ) { }

  
  ngOnInit() {
    this.loggedID = this.auth.getUser().id;
    this.swal.showLoading("Učitavanje...", false);
    this.sub = this.activatedRoute.params.subscribe(params => {
     this.id = +params['id'];

     if(this.id){
       this.http.get('tecajevi', this.id)
        .subscribe(
          data => {

          },
          err => {

          }
        );
     }
    });
  }
/*
  deleteSudionik(id){
    this.swal.confirmDelete(
      () => {
        this.http.patch('tecajevi', this.tecaj, this.id)
          .subscribe(data => {
            
          },
          err =>{

          });
      },
      () => {}
    );
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

  dodajObavijest(){
    if(this.novaObavijest.Poruka){

      this.novaObavijest.TecajID = this.id;
      this.novaObavijest.UserID = this.auth.getID();
      this.novaObavijest.Datum = new Date().toJSON();

      this.obavijestiService.insert(this.novaObavijest)
        .subscribe(data => {
          if(this.swal.handleResponse(data)){
            this.sanitizer.usrProfileImg(data.Data.Kreator);
            this.obavijesti.unshift(data.Data);

            this.notificationService.NotifyTecajObavijestInsert(this.novaObavijest.TecajID, this.auth.getID())
              .subscribe(data => {});
            this.novaObavijest = {};
          }
        });

    }
    else{
      this.swal.err("Unesite text obavijesti!");
    }
  }

  
  dodajTermin(){
    this.router.navigate(['/predavac/rasporedi']);
  }


  brisiObavijest(id){
    this.swal.confirmDelete(
      () => {
        this.obavijestiService.delete(id)
          .subscribe(data => {
            if(this.swal.handleResponse(data)){
              this.obavijesti = this.obavijesti.filter(o => o.ID != id);
            }
          });
      },
      () => {}
    );
  }

  nastavnaCjelinaDelete(id){
    this.swal.confirmDelete(
      () => {
        this.nastavneCjelineService.delete(id)
          .subscribe(data => {
            if(this.swal.handleResponse(data)){
              this.nastavneCjeline = this.nastavneCjeline.filter(nc => nc.ID != id);
            }
          });
      },
      () => {}
    );
  }

  dodajNastavnuCjelinu(){
    if(this.novaNastavnaCjelina.Naziv){

      this.novaNastavnaCjelina.RedniBroj = this.nastavneCjeline.length+1;
      this.novaNastavnaCjelina.TecajID = this.id;

      this.swal.showLoading("Molimo pričekajte...", false);
      this.nastavneCjelineService.insert(this.novaNastavnaCjelina)
        .subscribe(data => {
          this.swal.hideLoading();
          if(this.swal.handleResponse(data)){
            this.nastavneCjeline.push(data.Data);
            this.novaNastavnaCjelina = {};
          }
        });
    }
    else{
      this.swal.err("Unesite naziv nastavne cjeline!");
    }
  }

  asd(){
    alert("asd");
  }

  details(id){
    this.router.navigate(['/admin/termin-details/' + id]);
  }


  ngOnDestroy(){
    this.sub.unsubscribe();
  }
*/
}
